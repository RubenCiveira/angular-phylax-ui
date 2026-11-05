import { User } from 'app/features/identity/user/model/user.model';
import { UserRepository } from 'app/features/identity/user/repository/user-repository.service';
import { TenantRepository } from 'app/features/identity/tenant/repository/tenant-repository.service';
import { BaseImportAction } from 'app/shared/toolkit/action/base-import-action';
import { ImportDefinition } from 'app/shared/toolkit/entity-import/entity-import.model';
import { normalizeHeader } from 'app/shared/toolkit/entity-import/column-match';
import { Component, inject } from '@angular/core';
import { map, take } from 'rxjs';

/** Candidatos que pide cada búsqueda por nombre: el filtro puede no ser exacto y se comprueba aquí. */
const LOOKUP_LIMIT = 50;

@Component({
  selector: 'user-view-import-action',
  standalone: false,
  templateUrl: './user-view-import-action.component.html',
})
export class UserViewImportActionComponent extends BaseImportAction<User> {
  protected readonly scope = 'identity/user';
  protected readonly repository = inject(UserRepository);
  private readonly tenants = inject(TenantRepository);

  readonly definition: ImportDefinition<User> = {
    storageKey: 'identity.user',
    scope: this.scope,
    // El nombre es único dentro del tenant: el del contexto (va como filtro) o el de su columna
    keys: ['name'],
    columns: [
      { field: 'tenant', label: 'form-group.tenant.label', type: 'reference', required: true, aliases: ['tenant'] },
      { field: 'name', label: 'form-group.name.label', required: true, aliases: ['usuario', 'username', 'login'] },
      { field: 'password', label: 'form-group.password.label', required: true, aliases: ['password', 'clave'] },
      { field: 'email', label: 'form-group.email.label', aliases: ['email', 'mail', 'e-mail'] },
      { field: 'welcomeAt', label: 'form-group.welcome-at.label', type: 'datetime' },
      { field: 'emailVerified', label: 'form-group.email-verified.label', type: 'boolean' },
      { field: 'enabled', label: 'form-group.enabled.label', type: 'boolean' },
      {
        field: 'approvalStatus',
        label: 'form-group.approval-status.label',
        type: 'enum',
        options: ['unverified', 'pending', 'accepted', 'rejected'].map((value) => ({
          value,
          label: `form-group.approval-status.options.${value}`,
        })),
      },
      { field: 'temporalPassword', label: 'form-group.temporal-password.label', type: 'boolean' },
      { field: 'useSecondFactors', label: 'form-group.use-second-factors.label', type: 'boolean' },
      { field: 'blockedUntil', label: 'form-group.blocked-until.label', type: 'datetime' },
      { field: 'federatedProvider', label: 'form-group.federated-provider.label' },
    ],
    sensitive: ['password'],
    references: {
      tenant: {
        resolve: (text) =>
          this.tenants.values({ name: text, limit: LOOKUP_LIMIT }).pipe(
            take(1),
            map((found) => {
              const wanted = normalizeHeader(text);
              const tenant = found.find(
                (one) => one.uid === text || normalizeHeader(one.name) === wanted || one.domain === text,
              );
              return tenant ? { $ref: tenant.uid } : null;
            }),
          ),
      },
    },
    defaults: () => ({
      enabled: true,
      emailVerified: false,
      approvalStatus: 'accepted',
      temporalPassword: false,
      useSecondFactors: false,
    }),
    display: (values) => values.name ?? '',
    target: {
      acl: () => this.repository.checkAcl(),
      find: (values) =>
        this.repository
          .values({
            name: values.name,
            tenant: values.tenant?.$ref ? [values.tenant.$ref] : undefined,
            limit: LOOKUP_LIMIT,
          })
          .pipe(
            take(1),
            map((found) => found.filter((user) => user.name === values.name)),
          ),
      add: (item) => this.repository.add(item),
      update: (item) => this.repository.update(item),
    },
  };
}
