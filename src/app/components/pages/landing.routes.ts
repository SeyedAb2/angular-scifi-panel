import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'pages',children:[ {
  path: 'landing',
  loadComponent: () =>
    import('./landing/landing.component').then((m) => m.LandingComponent),
    title: 'SCIFI - Landing'
},
{
  path: 'jobs-landing',
  loadComponent: () =>
    import('./jobs-landing/jobs-landing.component').then(
      (m) => m.JobsLandingComponent
    ),
    title: 'SCIFI - Jobs-Landing'
},
]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class landingRoutingModule {
  static routes = admin;
}