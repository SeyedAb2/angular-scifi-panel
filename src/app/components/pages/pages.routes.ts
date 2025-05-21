     import { NgModule } from '@angular/core';
      import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';
      
      export const admin: Routes = [
       {path:'pages',children:[ {
        path: 'about-us',
        loadComponent: () =>
          import('./aboutus/aboutus.component').then((m) => m.AboutusComponent),
          title: 'SCIFI - About us'
      },
      {
        path: 'chat',
        loadComponent: () =>
          import('./chat/chat.component').then(
            (m) => m.ChatComponent
          ),
          title: 'SCIFI - Chat'
      },
      {
        path: 'contactus',
        loadComponent: () =>
          import('./contactus/contactus.component').then(
            (m) => m.ContactusComponent
          ),
          title: 'SCIFI - Contact us'
      },
      {
        path: 'contacts',
        loadComponent: () =>
          import('./contacts/contacts.component').then((m) => m.ContactsComponent),
          title: 'SCIFI - Contacts'
      },
      {
        path: 'emptypage',
        loadComponent: () =>
          import('./emptypage/emptypage.component').then((m) => m.EmptypageComponent),
          title: 'SCIFI - Empty page'
      },
      {
        path: 'faqs',
        loadComponent: () =>
          import('./faqs/faqs.component').then((m) => m.FaqsComponent),
          title: 'SCIFI - Faqs'
      },
      {
        path: 'timeline',
        loadComponent: () =>
          import('./timeline/timeline.component').then((m) => m.TimelineComponent),
          title: 'SCIFI - Timeline'
      },
      {
        path: 'notifications',
        loadComponent: () =>
          import('./notifications/notifications.component').then((m) => m.NotificationsComponent),
          title: 'SCIFI - Notifications'
      },
      {
        path: 'pricing',
        loadComponent: () =>
          import('./pricing/pricing.component').then((m) => m.PricingComponent),
          title: 'SCIFI - Pricing'
      },
      {
        path: 'team',
        loadComponent: () =>
          import('./team/team.component').then((m) => m.TeamComponent),
          title: 'SCIFI - Team'
      },
      {
        path: 'terms-conditions',
        loadComponent: () =>
          import('./terms-conditions/terms-conditions.component').then((m) => m.TermsConditionsComponent),
          title: 'SCIFI - Terms Conditions'
      },
      {
        path: 'todolist',
        loadComponent: () =>
          import('./todolist/todolist.component').then((m) => m.TodolistComponent),
          title: 'SCIFI - Todolist'
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./profile/profile.component').then((m) => m.ProfileComponent),
          title: 'SCIFI - Profile'
      },
      {
        path: 'profile-settings',
        loadComponent: () =>
          import('./profile-settings/profile-settings.component').then((m) => m.ProfileSettingsComponent),
          title: 'SCIFI - Profile Settings'
      },
     
      {
        path: 'reviews',
        loadComponent: () =>
          import('./reviews/reviews.component').then((m) => m.ReviewsComponent),
          title: 'SCIFI - Reviews'
      },
      {
        path: 'search-page',
        loadComponent: () =>
          import('./search-page/search-page.component').then((m) => SearchPageComponent),
          title: 'SCIFI - Search Page'
      },
      ]}
      ];
      @NgModule({
        imports: [RouterModule.forChild(admin)],
        exports: [RouterModule],
      })
      export class pagesRoutingModule {
        static routes = admin;
      }