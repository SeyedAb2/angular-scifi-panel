import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'apps',children:[ {
  path: 'fullcalender',
  loadComponent: () =>
    import('./fullcalendar/fullcalendar.component').then((m) => m.FullcalendarComponent),
    title: 'SCIFI - full Calender'
},
{
    path: 'gallery',
    loadComponent: () =>
      import('./gallery/gallery.component').then((m) => m.GalleryComponent),
      title: 'SCIFI - Gallery'
},
  {
    path: 'sweetalerts',
    loadComponent: () =>
      import('./sweetalerts/sweetalerts.component').then((m) => m.SweetalertsComponent),
      title: 'SCIFI - Sweetalerts'
  },
]}
];  
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class appsRoutingModule {
  static routes = admin;
}