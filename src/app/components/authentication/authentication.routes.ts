import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [  
 {path:'authentication',children:[ {
  path: 'coming-soon',
  loadComponent: () =>
    import('./commingsoon/commingsoon.component').then((m) => m.CommingsoonComponent),
    title: 'SCIFI - Coming Soon'
},
{
  path: 'under-maintainance',
  loadComponent: () =>
    import('./under-maintainance/under-maintainance.component').then(
      (m) => m.UnderMaintainanceComponent
    ),
    title: 'SCIFI - Under Maintainance'
},
]},
{
  path: 'authentication',
  children: [
    {
      path: 'coming-soon',
      loadComponent: () =>
        import('./commingsoon/commingsoon.component').then(
          (m) => m.CommingsoonComponent
        ),
        title: 'SCIFI - Comming Soon'
    },
    // {
    //   path: 'create-password/basic',
    //   loadComponent: () =>
    //     import('./create-password/basic/basic.component').then(
    //       (m) => m.BasicComponent
    //     ),
    //     title: 'SCIFI - Basic Create Password '
    // },
    {
      path: 'create-password/cover',
      loadComponent: () =>
        import('./create-password/cover/cover.component').then(
          (m) => m.CoverComponent
        ),
        title: 'SCIFI -Create Password Cover'
    },

    {
      path: 'lock-screen/basic',
      loadComponent: () =>
        import('./lock-screen/basic/basic.component').then(
          (m) => m.BasicComponent
        ),
        title: 'SCIFI - Basic Lock Screen'
    },
    {
      path: 'lock-screen/cover',
      loadComponent: () =>
        import('./lock-screen/cover/cover.component').then(
          (m) => m.CoverComponent
        ),
        title: 'SCIFI - Lock Screen Cover'
    },
    // {
    //   path: 'reset-password/basic',
    //   loadComponent: () =>
    //     import('./reset-password/basic/basic.component').then(
    //       (m) => m.BasicComponent
    //     ),
    //     title: 'SCIFI - Basic Reset Password '
    // },
    // {
    //   path: 'reset-password/cover',
    //   loadComponent: () =>
    //     import('./reset-password/cover/cover.component').then(
    //       (m) => m.CoverComponent
    //     ),
    //     title: 'SCIFI - Reset Password Cover'
    // },
    // {
    //   path: 'sign-up/basic',
    //   loadComponent: () =>
    //     import('./signup/basic/basic.component').then(
    //       (m) => m.BasicComponent
    //     ),
    //     title: 'SCIFI - Basic Sign Up'
    // },
    // {
    //   path: 'sign-up/cover',
    //   loadComponent: () =>
    //     import('./signup/cover/cover.component').then(
    //       (m) => m.CoverComponent
    //     ),
    //     title: 'SCIFI - Cover Sign Up'
    // },
    // {
    //   path: 'sign-in/basic',
    //   loadComponent: () =>
    //     import('./signin/basic/basic.component').then(
    //       (m) => m.BasicComponent
    //     ),
    //     title: 'SCIFI - Basic Sign In'
    // },
    {
      path: 'sign-in/cover',
      loadComponent: () =>
        import('./signin/cover/cover.component').then(
          (m) => m.CoverComponent
        ),
        title: 'رضوان - ورود'
    },
    {
      path: 'twostep-verification/basic',
      loadComponent: () =>
        import('./twostep-verification/basic/basic.component').then(
          (m) => m.BasicComponent
        ),
        title: 'Basic Two-Step Verification'
    },
    {
      path: 'twostep-verification/cover',
      loadComponent: () =>
        import('./twostep-verification/cover/cover.component').then(
          (m) => m.CoverComponent
        ),
        title: 'Two-Step Verification Cover' 
    },
    {
      path: 'under-maintanace',
      loadComponent: () =>
        import('./under-maintainance/under-maintainance.component').then(
          (m) => m.UnderMaintainanceComponent
        ),
        title: 'Under Maintanace'
    },
  ],
},
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class authenticationRoutingModule {
  static routes = admin;
}