import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'maps',
 children:[ {
  path: 'leafletmaps',
  loadComponent: () =>
    import('./leafletmaps/leafletmaps.component').then((m) => m.LeafletmapsComponent),
    title: 'SCIFI - Leaflet Map'
},
{
  path: 'google-map',
  loadComponent: () =>
    import('./google-map/google-map.component').then((m) => m.GoogleMapComponent),
    title: 'SCIFI - Google Map'
},
]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class mapsRoutingModule {
  static routes = admin;
}