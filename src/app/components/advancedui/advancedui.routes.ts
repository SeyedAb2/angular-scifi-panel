import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'advanced-ui',children:[ {
  path: 'accordions',
  loadComponent: () =>
    import('./accordions/accordions.component').then((m) => m.AccordionsComponent),
    title: 'SCIFI - Accordions'
},
{
  path: 'carousel',
  loadComponent: () =>
    import('./carousel/carousel.component').then(
      (m) => m.CarouselComponent
    ),
    title: 'SCIFI - Carousel'
},
{
  path: 'draggable-cards',
  loadComponent: () =>
    import('./draggable-cards/draggable-cards.component').then(
      (m) => m.DraggableCardsComponent
    ),
    title: 'SCIFI - Draggable Cards'
},
{
  path: 'modals-closes', 
  loadComponent: () =>
    import('../advancedui/modals-closes/modals-closes.component').then(
      (m) => m.ModalsClosesComponent
    ),    
    title: 'SCIFI - Modals Closes'
},
{
  path: 'placeholders',
  loadComponent: () =>
    import('../advancedui/placeholders/placeholders.component').then(
      (m) => m.PlaceholdersComponent
    ),
    title: 'SCIFI - Placeholders'
},
{
  path: 'navbar',
  loadComponent: () =>
    import('./navbar/navbar.component').then((m) => m.NavbarComponent),
    title: 'SCIFI - Navbar'
},
{
  path: 'offcanvas',
  loadComponent: () =>
    import('./offcanvas/offcanvas.component').then((m) => m.OffcanvasComponent),
    title: 'SCIFI - Offcanvas'
},
{
  path: 'rating',
  loadComponent: () =>
    import('./ratings/ratings.component').then((m) => m.RatingsComponent),
    title: 'SCIFI - Courses'
},
{
  path: 'ribbons',
  loadComponent: () =>
    import('./ribbons/ribbons.component').then((m) => m.RibbonsComponent),
    title: 'SCIFI - Ribbons'
},
{
  path: 'scrollspy',
  loadComponent: () =>
    import('./scrollspy/scrollspy.component').then((m) => m.ScrollspyComponent),
    title: 'SCIFI - Scrollspy'
},
{
  path: 'swiperjs',
  loadComponent: () =>
    import('./swiperjs/swiperjs.component').then((m) => m.SwiperjsComponent),
    title: 'SCIFI - Swiperjs'
},
{
  path: 'sortable-js',
  loadComponent: () =>
    import('./sortable-js/sortable-js.component').then((m) => m.SortableJsComponent),
    title: 'SCIFI - Sortable Js'
},

]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class advanceduiRoutingModule {
  static routes = admin;
}