import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'error',children:[ {
  path: 'error500',
  loadComponent: () =>
    import('./error500/error500.component').then((m) => m.Error500Component),
    title: 'SCIFI - Error 500'
},
{
  path: 'error401',
  loadComponent: () =>
    import('./error401/error401.component').then(
      (m) => m.Error401Component
    ),
    title: 'SCIFI - Error 401'
},
{
  path: 'error404',
  loadComponent: () =>
    import('./error404/error404.component').then(
      (m) => m.Error404Component
    ),
    title: 'SCIFI - Error 404'
},
]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class errorRoutingModule {
  static routes = admin;
}