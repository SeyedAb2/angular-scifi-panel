import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
  {
    path: 'ui-elements',
    children: [
      {
        path: 'alerts',
        loadComponent: () =>
          import('./alerts/alerts.component').then((m) => m.AlertsComponent),
        title: 'SCIFI - Alerts',
      },
      {
        path: 'breadcrumb',
        loadComponent: () =>
          import('./breadcrumb/breadcrumb.component').then(
            (m) => m.BreadcrumbComponent
          ),
        title: 'SCIFI - Breadcrumb',
      },
      {
        path: 'buttons',
        loadComponent: () =>
          import('./buttons/buttons.component').then((m) => m.ButtonsComponent),
        title: 'SCIFI - Buttons',
      },
      {
        path: 'badge',
        loadComponent: () =>
          import('./badge/badge.component').then((m) => m.BadgeComponent),
        title: 'SCIFI - Badge',
      },
      {
        path: 'button-group',
        loadComponent: () =>
          import('./buttongroup/buttongroup.component').then(
            (m) => m.ButtongroupComponent
          ),
        title: 'SCIFI - Button Group',
      },
      {
        path: 'cards',
        loadComponent: () =>
          import('./cards/cards.component').then((m) => m.CardsComponent),
        title: 'SCIFI - Cards',
      },
      {
        path: 'dropdowns',
        loadComponent: () =>
          import('./dropdowns/dropdowns.component').then(
            (m) => m.DropdownsComponent
          ),
        title: 'SCIFI - Dropdowns',
      },
      {
        path: 'images&figures',
        loadComponent: () =>
          import('./images-figures/images-figures.component').then(
            (m) => m.ImagesFiguresComponent
          ),
        title: 'SCIFI - Images-Figures',
      },
      {
        path: 'links-interactions',
        loadComponent: () =>
          import('./links-interactions/links-interactions.component').then(
            (m) => m.LinksInteractionsComponent
          ),
        title: 'SCIFI - Links Interactions',
      },
      {
        path: 'list-group',
        loadComponent: () =>
          import('./listgroup/listgroup.component').then(
            (m) => m.ListgroupComponent
          ),
        title: 'SCIFI - List group',
      },
      {
        path: 'nav-tabs',
        loadComponent: () =>
          import('./navtabs/navtabs.component').then((m) => m.NavtabsComponent),
        title: 'SCIFI - Navtabs',
      },
      {
        path: 'objectfit',
        loadComponent: () =>
          import('./objectfit/objectfit.component').then(
            (m) => m.ObjectfitComponent
          ),
        title: 'SCIFI - Objectfit',
      },
      {
        path: 'pagination',
        loadComponent: () =>
          import('./pagination/pagination.component').then(
            (m) => m.PaginationComponent
          ),
        title: 'SCIFI - Pagination',
      },
      {
        path: 'popovers',
        loadComponent: () =>
          import('./popovers/popovers.component').then(
            (m) => m.PopoversComponent
          ),
        title: 'SCIFI - Popovers',
      },
      {
        path: 'toasts',
        loadComponent: () =>
          import('./toasts/toasts.component').then((m) => m.ToastsComponent),
        title: 'SCIFI - toasts',
      },
      {
        path: 'progress',
        loadComponent: () =>
          import('./progress/progress.component').then(
            (m) => m.ProgressComponent
          ),
        title: 'SCIFI - Progress',
      },
      {
        path: 'spinners',
        loadComponent: () =>
          import('./spinners/spinners.component').then(
            (m) => m.SpinnersComponent
          ),
        title: 'SCIFI - Spinners',
      },
      {
        path: 'toasts',
        loadComponent: () =>
          import('./toasts/toasts.component').then((m) => m.ToastsComponent),
        title: 'SCIFI - Toasts',
      },
      {
        path: 'tooltips',
        loadComponent: () =>
          import('./tooltips/tooltips.component').then(
            (m) => m.TooltipsComponent
          ),
        title: 'SCIFI - Tooltips',
      },
      {
        path: 'typography',
        loadComponent: () =>
          import('./typography/typography.component').then(
            (m) => m.TypographyComponent
          ),
        title: 'SCIFI - Typography',
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class uielementsRoutingModule {
  static routes = admin;
}
