      import { NgModule } from '@angular/core';
      import { RouterModule, Routes } from '@angular/router';
      
      export const admin: Routes = [
       {path:'apps/filemanager',children:[ {
        path: 'filemanager',
        loadComponent: () =>
          import('./filemanager/filemanager.component').then((m) => m.FilemanagerComponent),
          title: 'SCIFI - Filemanager'
      },
     
      ]}
      ];
      @NgModule({
        imports: [RouterModule.forChild(admin)],
        exports: [RouterModule],
      })
      export class filemanagerRoutingModule {
        static routes = admin;
      }