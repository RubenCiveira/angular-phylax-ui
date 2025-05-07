import { Routes } from '@angular/router';
import { AppConfigService, MicroFrontConfigService } from '@common/context/config/app-config.service';
import { isAuthenticated } from './guard/user.guards';
import { MenuItem } from './layout/container/model/menu-item.model';

export function menuRoutes(_appConfig: AppConfigService, _mfeConfig: MicroFrontConfigService): Routes {
  return [
    {
      path: 'tenant-management',
      data: { label: 'Tenants', path: 'Access' },
      canActivate: [isAuthenticated],
      loadChildren: () =>
        import('@features/access/tenant/routes/tenant-view-list-route/tenant-view-list-route.module').then(
          (m) => m.TenantViewListRouteModule,
        ),
    },
    {
      path: 'tenant-config',
      data: { label: 'Tenants Config', path: 'Access' },
      canActivate: [isAuthenticated],
      loadChildren: () =>
        import(
          '@features/access/tenant-config/routes/tenant-config-view-list-route/tenant-config-view-list-route.module'
        ).then((m) => m.TenantConfigViewListRouteModule),
    },
    {
      path: 'security-domains',
      data: { label: 'Security domain', path: 'Access' },
      canActivate: [isAuthenticated],
      loadChildren: () =>
        import(
          '@features/access/security-domain/routes/security-domain-view-list-route/security-domain-view-list-route.module'
        ).then((m) => m.SecurityDomainViewListRouteModule),
    },
    {
      path: 'roles',
      data: { label: 'Roles', path: 'Access' },
      canActivate: [isAuthenticated],
      loadChildren: () =>
        import('@features/access/role/routes/role-view-list-route/role-view-list-route.module').then(
          (m) => m.RoleViewListRouteModule,
        ),
    },
    {
      path: 'users',
      data: { label: 'Users', path: 'Access' },
      canActivate: [isAuthenticated],
      loadChildren: () =>
        import('@features/access/user/routes/user-view-list-route/user-view-list-route.module').then(
          (m) => m.UserViewListRouteModule,
        ),
    },
    // {
    //   path: 'info',
    //   loadChildren: () =>
    //     import(
    //       '../../../features/actuator/info/info.routing.module'
    //     ).then((m) => m.InfoRoutingModule),
    // }
  ];
}

// Este será el menú.
export function menu(): MenuItem[] {
  return [
    {
      label: 'access',
      icon: 'badge',
      subItems: [
        {
          label: 'Users',
          icon: 'group',
          route: 'users',
        },
        {
          label: 'Security groups',
          icon: 'group',
          route: 'security-domains',
        },
        {
          label: 'Tenants',
          icon: 'domain',
          route: 'tenant-management',
        },
        {
          label: 'Roles',
          icon: 'role',
          route: 'roles',
        },
        {
          label: 'Tenants Config',
          icon: 'domain',
          route: 'tenant-config',
        },
      ],
    },
  ];
}
