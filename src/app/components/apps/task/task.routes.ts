import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'apps/task',children:[ {
  path: 'kanban-board',
  loadComponent: () =>
    import('./kanban-board/kanban-board.component').then((m) => m.KanbanBoardComponent),
    title: 'SCIFI -Kanban Board '
},
{
  path: 'list-view',
  loadComponent: () =>
    import('./list-view/list-view.component').then(
      (m) => m.ListViewComponent
    ),
    title: 'SCIFI - List View'
},
{
  path: 'task-details',
  loadComponent: () =>
    import('./task-details/task-details.component').then(
      (m) => m.TaskDetailsComponent
    ),
    title: 'SCIFI - Task Details'
},

]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class taskRoutingModule {
  static routes = admin;
}