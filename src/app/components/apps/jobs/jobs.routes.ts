import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'apps/jobs',children:[ {
  path: 'candidate-details',
  loadComponent: () =>
    import('./candidate-details/candidate-details.component').then((m) => m.CandidateDetailsComponent),
    title: 'SCIFI - Candidate Details'
},
{
  path: 'job-details',
  loadComponent: () =>
    import('./job-details/job-details.component').then(
      (m) => m.JobDetailsComponent
    ),
    title: 'SCIFI - Job Details'
},
{
  path: 'job-post',
  loadComponent: () =>
    import('./job-post/job-post.component').then(
      (m) => m.JobPostComponent
    ),
    title: 'SCIFI - Job Post'
},
{
    path: 'jobs-list',
    loadComponent: () =>
      import('./job-list/job-list.component').then(
        (m) => m.JobListComponent
      ),
       title: 'SCIFI - Jobs List'
  },
  {
    path: 'search-candidate',
    loadComponent: () =>
      import('./search-candidate/search-candidate.component').then(
        (m) => m.SearchCandidateComponent
      ),
      title: 'SCIFI - Search Candidate'
  },
  {
    path: 'search-jobs',
    loadComponent: () =>
      import('./search-jobs/search-jobs.component').then(
        (m) => m.SearchJobsComponent
      ),
      title: 'SCIFI - Search Jobs'
  },
  {
    path: 'search-company',
    loadComponent: () =>
      import('./search-company/search-company.component').then(
        (m) => m.SearchCompanyComponent
      ),
      title: 'SCIFI - Search Company'
  },
]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class jobsRoutingModule {
  static routes = admin;
}