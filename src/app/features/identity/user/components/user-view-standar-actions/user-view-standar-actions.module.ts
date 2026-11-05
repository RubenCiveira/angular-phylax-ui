import { ActionContainerComponent } from 'app/shared/toolkit/action/action-container.component';
import { UserViewCreateActionModule } from 'app/features/identity/user/actions/user-view-create-action/user-view-create-action.module';
import { UserViewImportActionModule } from 'app/features/identity/user/actions/user-view-import-action/user-view-import-action.module';
import { UserViewExportActionModule } from 'app/features/identity/user/actions/user-view-export-action/user-view-export-action.module';
import { UserViewEditActionModule } from 'app/features/identity/user/actions/user-view-edit-action/user-view-edit-action.module';
import { UserViewDetailActionModule } from 'app/features/identity/user/actions/user-view-detail-action/user-view-detail-action.module';
import { UserViewDeleteActionModule } from 'app/features/identity/user/actions/user-view-delete-action/user-view-delete-action.module';
import { UserViewDeleteSelectionActionModule } from 'app/features/identity/user/actions/user-view-delete-selection-action/user-view-delete-selection-action.module';
import { UserViewAcceptActionModule } from 'app/features/identity/user/actions/user-view-accept-action/user-view-accept-action.module';
import { UserViewAcceptSelectionActionModule } from 'app/features/identity/user/actions/user-view-accept-selection-action/user-view-accept-selection-action.module';
import { UserViewRejectActionModule } from 'app/features/identity/user/actions/user-view-reject-action/user-view-reject-action.module';
import { UserViewRejectSelectionActionModule } from 'app/features/identity/user/actions/user-view-reject-selection-action/user-view-reject-selection-action.module';
import { UserViewDisableActionModule } from 'app/features/identity/user/actions/user-view-disable-action/user-view-disable-action.module';
import { UserViewDisableSelectionActionModule } from 'app/features/identity/user/actions/user-view-disable-selection-action/user-view-disable-selection-action.module';
import { UserViewEnableActionModule } from 'app/features/identity/user/actions/user-view-enable-action/user-view-enable-action.module';
import { UserViewEnableSelectionActionModule } from 'app/features/identity/user/actions/user-view-enable-selection-action/user-view-enable-selection-action.module';
import { UserViewUnlockActionModule } from 'app/features/identity/user/actions/user-view-unlock-action/user-view-unlock-action.module';
import { UserViewUnlockSelectionActionModule } from 'app/features/identity/user/actions/user-view-unlock-selection-action/user-view-unlock-selection-action.module';
import { UserViewUserRoleAssignmentsModule } from 'app/features/identity/user/actions/user-view-user-role-assignments/user-view-user-role-assignments.module';
import { UserViewUserGroupMembershipsModule } from 'app/features/identity/user/actions/user-view-user-group-memberships/user-view-user-group-memberships.module';
import { UserViewStandarActionsComponent } from './user-view-standar-actions.component';
import { provideTranslocoScope } from '@jsverse/transloco';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [UserViewStandarActionsComponent],
  exports: [UserViewStandarActionsComponent],
  imports: [
    ActionContainerComponent,
    UserViewAcceptActionModule,
    UserViewAcceptSelectionActionModule,
    UserViewCreateActionModule,
    UserViewDeleteActionModule,
    UserViewDeleteSelectionActionModule,
    UserViewDetailActionModule,
    UserViewDisableActionModule,
    UserViewDisableSelectionActionModule,
    UserViewEditActionModule,
    UserViewEnableActionModule,
    UserViewEnableSelectionActionModule,
    UserViewImportActionModule,
    UserViewExportActionModule,
    UserViewRejectActionModule,
    UserViewRejectSelectionActionModule,
    UserViewUnlockActionModule,
    UserViewUnlockSelectionActionModule,
    UserViewUserGroupMembershipsModule,
    UserViewUserRoleAssignmentsModule,
  ],
  providers: [provideTranslocoScope({ scope: 'identity/user', alias: 'identity/user' })],
})
export class UserViewStandarActionsModule {}
