import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FacultyComponent } from './faculty/faculty.component';
import { ManagerComponent } from './manager/manager.component';
import { StudentComponent } from './student/student.component';

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
      path: 'manager',
      component:  ManagerComponent,
    },
    {
      path: 'student',
      component: StudentComponent,
    },
    {
      path: 'student',
      loadChildren: () => import('./student/student.module')
        .then(m => m.StudentModule),
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
