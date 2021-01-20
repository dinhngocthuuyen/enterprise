import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FacultyComponent } from './faculty/faculty.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'login',
      loadChildren: () => import('./login/login.module')
        .then(m => m.LoginModule),
    },
    {
      path: 'faculty',
      component: FacultyComponent,
    },
    {
      path: 'faculty',
      loadChildren: () => import('./faculty/faculty.module')
        .then(m => m.FacultyModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
    //   component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
