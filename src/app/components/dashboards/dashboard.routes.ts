import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'dashboards',children:[ 
  {
    path: 'gaming',
    loadComponent: () =>
      import('./gaming/gaming.component').then((m) => m.GamingComponent),
      title: 'SCIFI - Gaming'
  },
  {
  path: 'sales',
  loadComponent: () =>
    import('./sales/sales.component').then((m) => m.SalesComponent),
    title: 'SCIFI - Sales'
},
{
  path: 'analytics',
  loadComponent: () =>
    import('./analytics/analytics.component').then(   
      (m) => m.AnalyticsComponent
    ),
    title: 'SCIFI - Analytics'
},
{
  path: 'ecommerce',
  loadComponent: () =>
    import('./ecommerce/ecommerce.component').then(
      (m) => m.EcommerceComponent
    ),
    title: 'SCIFI - Ecommerce'
},
{
  path: 'nft',
  loadComponent: () =>
    import('./nft/nft.component').then((m) => m.NftComponent),
    title: 'SCIFI - NFT'
},
{
  path: 'crm',
  loadComponent: () =>
    import('./crm/crm.component').then((m) => m.CrmComponent),
    title: 'SCIFI - CRM'
},
{
  path: 'hrm',
  loadComponent: () =>
    import('./hrm/hrm.component').then((m) => m.HrmComponent),
    title: 'SCIFI - HRM'
},

{
  path: 'crypto',
  loadComponent: () =>
    import('./crypto/crypto.component').then((m) => m.CryptoComponent),
    title: 'SCIFI - Crypto'
},
{
  path: 'jobs',
  loadComponent: () =>
    import('./jobs/jobs.component').then((m) => m.JobsComponent),
    title: 'SCIFI - Jobs'
},
{
  path: 'projects',
  loadComponent: () =>
    import('./projects/projects.component').then((m) => m.ProjectsComponent),
    title: 'SCIFI - Projects'
},
{
  path: 'courses',
  loadComponent: () =>
    import('./courses/courses.component').then((m) => m.CoursesComponent),
    title: 'SCIFI - Courses'
},
{
  path: 'stocks',
  loadComponent: () =>
    import('./stocks/stocks.component').then((m) => m.StocksComponent),
    title: 'SCIFI - Stocks'
},
{
  path: 'personal',
  loadComponent: () =>
    import('./personal/personal.component').then((m) => m.PersonalComponent),
    title: 'SCIFI - Personal'
},

]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class dashboardRoutingModule {
  static routes = admin;
}