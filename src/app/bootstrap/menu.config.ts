import { Routes } from '@angular/router';
import { AppConfigService, MicroFrontConfigService } from '@common/context/config/app-config.service';
import { isAuthenticated } from './guard/user.guards';
import { MenuItem } from './layout/container/model/menu-item.model';

export function menuRoutes(_appConfig: AppConfigService, _mfeConfig: MicroFrontConfigService): Routes {
  return [
    {
      path: 'tenant-management',
      data: { label: 'Tenants management', path: 'Access' },
      canActivate: [isAuthenticated],
      loadChildren: () =>
        import('@features/access/tenant/routes/tenant-view-list-route/tenant-view-list-route.module').then(
          (m) => m.TenantViewListRouteModule,
        ),
    },
    {
      path: 'tenant-config',
      data: { label: 'Tenants', path: 'Access' },
      canActivate: [isAuthenticated],
      loadChildren: () =>
        import(
          '@features/access/tenant-config/routes/tenant-config-view-list-route/tenant-config-view-list-route.module'
        ).then((m) => m.TenantConfigViewListRouteModule),
    },
    {
      path: 'security-domains',
      data: { label: 'Tenants', path: 'Access' },
      canActivate: [isAuthenticated],
      loadChildren: () =>
        import(
          '@features/access/security-domain/routes/security-domain-view-list-route/security-domain-view-list-route.module'
        ).then((m) => m.SecurityDomainViewListRouteModule),
    },
    {
      path: 'users',
      data: { label: 'Tenants', path: 'Access' },
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
          label: 'users',
          icon: 'group',
          route: 'users',
        },
        {
          label: 'securities',
          icon: 'group',
          route: 'security-domains',
        },
        {
          label: 'Manage tenants',
          icon: 'domain',
          route: 'tenant-management',
        },
        {
          label: 'Config tenants',
          icon: 'domain',
          route: 'tenant-config',
        },
      ],
    },
  ];
}
