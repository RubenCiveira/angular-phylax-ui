import { provideTranslocoScope } from '@jsverse/transloco';
import { EntityImportComponent } from 'app/shared/toolkit/entity-import/entity-import.component';
import { UserViewImportActionComponent } from './user-view-import-action.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [UserViewImportActionComponent],
  exports: [UserViewImportActionComponent],
  imports: [EntityImportComponent],
  providers: [provideTranslocoScope({ scope: 'identity/user', alias: 'identity/user' })],
})
export class UserViewImportActionModule {}
