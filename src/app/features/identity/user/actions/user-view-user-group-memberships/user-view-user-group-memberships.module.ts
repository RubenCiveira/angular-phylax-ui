import { TranslocoModule, provideTranslocoScope } from '@jsverse/transloco';
import { CommonModule } from '@angular/common';
import { UserGroupMembershipViewListModule } from 'app/features/access/user-group-membership/components/user-group-membership-view-list/user-group-membership-view-list.module';
import { UserViewUserGroupMembershipsComponent } from './user-view-user-group-memberships.component';
import { NgModule } from '@angular/core';
import { ListViewModule } from '@shared/toolkit/list-view/list-view.module';

@NgModule({
  declarations: [UserViewUserGroupMembershipsComponent],
  exports: [UserViewUserGroupMembershipsComponent],
  imports: [CommonModule, TranslocoModule, ListViewModule, UserGroupMembershipViewListModule],
  providers: [provideTranslocoScope({ scope: 'identity/user', alias: 'identity/user' })],
})
export class UserViewUserGroupMembershipsModule {}
