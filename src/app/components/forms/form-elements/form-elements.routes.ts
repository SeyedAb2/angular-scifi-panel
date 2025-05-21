import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'forms/form-elements',children:[ {
  path: 'inputs',
  loadComponent: () =>
    import('./inputs/inputs.component').then((m) => m.InputsComponent),
    title: 'SCIFI - Inputs'
},
{
  path: 'checks-radios',
  loadComponent: () =>
    import('./checksradios/checksradios.component').then(
      (m) => m.ChecksradiosComponent
    ),
    title: 'SCIFI - Checks-radios'
},
{
  path: 'inputgroup',
  loadComponent: () =>
    import('./inputgroup/inputgroup.component').then(
      (m) => m.InputgroupComponent
    ),
    title: 'SCIFI - Inputgroup'
},
{
    path: 'formselect',
    loadComponent: () =>
      import('./formselect/formselect.component').then(
        (m) => m.FormselectComponent
      ),
      title: 'SCIFI - Formselect'
  },
  {
    path: 'file-uploads',
    loadComponent: () =>
      import('./fileuploads/fileuploads.component').then(
        (m) => m.FileuploadsComponent
      ),
      title: 'SCIFI - File uploads'
  },
  
  {
    path: 'datetimepicker',
    loadComponent: () =>
      import('./datetimepicker/datetimepicker.component').then(
        (m) => m.DatetimepickerComponent
      ),
      title: 'SCIFI - Datetimepicker'
  },
  {
    path: 'color-pickers',
    loadComponent: () =>
      import('./colorpicker/colorpicker.component').then(
        (m) => m.ColorpickerComponent
      ),
      title: 'SCIFI - Color Pickers'
  },
  {
    path: 'inputs',
    loadComponent: () =>
      import('./inputs/inputs.component').then(
        (m) => m.InputsComponent
      ),
      title: 'SCIFI - Inputs'
  },
  {
    path: 'range-slider',
    loadComponent: () =>
      import('./rangeslider/rangeslider.component').then(
        (m) => m.RangesliderComponent
      ),
      title: 'SCIFI - Range Slider'
  },
  {
    path: 'inputmask',
    loadComponent: () =>
      import('./input-mask/input-mask.component').then(
        (m) => m.InputMaskComponent
      ),
      title: 'SCIFI - Range Slider'
  },
]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class formelementsRoutingModule {
  static routes = admin;
}