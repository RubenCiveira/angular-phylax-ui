import { User } from 'app/features/identity/user/model/user.model';
import { USER_EXCEL_COLUMNS, USER_EXCEL_SENSITIVE } from 'app/features/identity/user/model/user-excel-columns';
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
    columns: USER_EXCEL_COLUMNS,
    sensitive: USER_EXCEL_SENSITIVE,
    // Campos que el backend solo cambia con sus acciones: se aplican tras crear o actualizar
    actions: {
      approvalStatus: [
        { name: 'accept', value: 'accepted', run: (user) => this.repository.accept(user.uid) },
        { name: 'reject', value: 'rejected', run: (user) => this.repository.reject(user.uid) },
      ],
      enabled: [
        { name: 'enable', value: true, run: (user) => this.repository.enable(user.uid) },
        { name: 'disable', value: false, run: (user) => this.repository.disable(user.uid) },
      ],
    },
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
