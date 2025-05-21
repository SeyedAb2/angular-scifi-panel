import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'forms',children:[ {
  path: 'form-layouts',
  loadComponent: () =>
    import('./form-layouts/form-layouts.component').then((m) => m.FormLayoutsComponent),
    title: 'SCIFI - Form Layouts'
},
{
  path: 'floating-labels',
  loadComponent: () =>
    import('./floating-labels/floating-labels.component').then((m) => m.FloatingLabelsComponent),
    title: 'SCIFI - Floating Labels'
},
{
  path: 'forms-advanced',
  loadComponent: () =>
    import('./form-advanced/form-advanced.component').then((m) => m.FormAdvancedComponent),
    title: 'SCIFI - Advanced Form'
},
{
  path: 'form-wizards',
  loadComponent: () =>
    import('./form-wizards/form-wizards.component').then(
      (m) => m.FormWizardsComponent
    ),
    title: 'SCIFI - Validation'
},
{
  path: 'validation',
  loadComponent: () =>
    import('./validation/validation.component').then(
      (m) => m.ValidationComponent
    ),
    title: 'SCIFI - Validation'
},
{
  path: 'select2',
  loadComponent: () =>
    import('./select2/select2.component').then(
      (m) => m.Select2Component
    ),
    title: 'SCIFI - Select2'
},

]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class formsRoutingModule {
  static routes = admin;
}