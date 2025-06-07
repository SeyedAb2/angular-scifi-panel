import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const humanResource: Routes = [
  {path:'hr', children:[
    {path:'' , redirectTo:'users', pathMatch:'full'},
    {
      path: 'users',
      loadComponent: () =>
        import('./users/users.component').then((m) => m.UsersComponent),
        title: 'منابع انسانی  - مدیریت کاربران'
    },
    {
      path: 'users/:username',
      loadComponent: () =>
        import('./users/view/view.component').then((m) => m.ViewComponent),
        title: 'منابع انسانی  - مدیریت کاربر'
    }, 
    {
      path: 'users/:username/edit',
      loadComponent: () =>
        import('./users/edit/edit.component').then((m) => m.EditComponent),
        title: 'منابع انسانی  - مدیریت کاربرا'
    },  
    {
      path: 'access',
      loadComponent: () =>
        import('./access/access.component').then((m) => m.AccessComponent),
        title: 'منابع انسانی  - مدیریت دسترسسی ها'
    },
    {
      path: 'level',
      loadComponent: () =>
        import('./level/level.component').then((m) => m.LevelComponent),
        title: 'منابع انسانی  - مدیریت سطح ها'
    },
    {
      path: 'role',
      loadComponent: () =>
        import('./role/role.component').then((m) => m.RoleComponent),
        title: 'منابع انسانی  - مدیریت نقش ها'
    },
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(humanResource)],
  exports: [RouterModule],
})
export class humanResourceRoutingModule {
  static routes = humanResource;
}