import { User } from 'app/features/identity/user/model/user.model';
import { USER_EXCEL_COLUMNS, USER_EXCEL_SENSITIVE } from 'app/features/identity/user/model/user-excel-columns';
import { UserRepository } from 'app/features/identity/user/repository/user-repository.service';
import { TenantRepository } from 'app/features/identity/tenant/repository/tenant-repository.service';
import { BaseExportAction } from 'app/shared/toolkit/action/base-export-action';
import { ExportDefinition } from 'app/shared/toolkit/entity-export/entity-export.model';
import { Component, inject } from '@angular/core';
import { map, take } from 'rxjs';

@Component({
  selector: 'user-view-export-action',
  standalone: false,
  templateUrl: './user-view-export-action.component.html',
})
export class UserViewExportActionComponent extends BaseExportAction<User> {
  protected readonly scope = 'identity/user';
  protected readonly repository = inject(UserRepository);
  private readonly tenants = inject(TenantRepository);

  readonly definition: ExportDefinition<User> = {
    name: 'identity.user',
    scope: this.scope,
    // Las mismas columnas que la importación: el fichero se puede editar y volver a subir
    columns: USER_EXCEL_COLUMNS,
    sensitive: USER_EXCEL_SENSITIVE,
    references: {
      // Por nombre, que es como lo resuelve la importación
      tenant: {
        names: (refs) =>
          this.tenants.values({ uids: refs, limit: refs.length }).pipe(
            take(1),
            map((found) => Object.fromEntries(found.map((tenant) => [tenant.uid, tenant.name]))),
          ),
      },
    },
    source: {
      acl: () => this.repository.checkAcl(),
      list: (filter) => this.repository.list(filter).pipe(take(1)),
    },
  };
}
