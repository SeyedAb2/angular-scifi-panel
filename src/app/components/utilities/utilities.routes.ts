import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'utilities',children:[ {
  path: 'avatars',
  loadComponent: () =>
    import('./avatars/avatars.component').then((m) => m.AvatarsComponent),
 title: 'SCIFI - Avatars'
  },
{
  path: 'borders',
  loadComponent: () =>
    import('./borders/borders.component').then(
      (m) => m.BordersComponent
    ),
 title: 'SCIFI - Borders'
  },
{
  path: 'break-point',
  loadComponent: () =>
    import('./break-point/break-point.component').then(
      (m) => m.BreakPointComponent
    ),
 title: 'SCIFI - Break-point'
  },
{
  path: 'colors',
  loadComponent: () =>
    import('./colors/colors.component').then(
      (m) => m.ColorsComponent
    ),
 title: 'SCIFI - Colors'
  },
{
  path: 'columns',
  loadComponent: () =>
    import('./columns/columns.component').then((m) => m.ColumnsComponent),
 title: 'SCIFI - Columns'
  },
{
  path: 'flex',
  loadComponent: () =>
    import('./flex/flex.component').then((m) => m.FlexComponent),
 title: 'SCIFI - Flex'
  },
{
  path: 'gutters',
  loadComponent: () =>
    import('./gutter/gutter.component').then((m) => m.GutterComponent),
 title: 'SCIFI - Gutters'
  },
{
  path: 'helper',
  loadComponent: () =>
    import('./helper/helper.component').then((m) => m.HelperComponent),
 title: 'SCIFI - Helper'
  },
{
  path: 'position',
  loadComponent: () =>
    import('./position/position.component').then((m) => m.PositionComponent),
 title: 'SCIFI - Position'
  },
{
  path: 'additional-content',
  loadComponent: () =>
    import('./additional-content/additional-content.component').then((m) => m.AdditionalContentComponent),
    title: 'SCIFI - Additional-content'
},


]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class utilitiesRoutingModule {
  static routes = admin;
}