import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './coordinators/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FacultyComponent } from './faculty/containers/faculty.component';
import { AdminComponent, SignInComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { StaffComponent } from './staff/staff.component';
import { ReviewComponent } from './coordinators/review/review.component';
import { GuestComponent } from './guest/guest.component';
import { StudentmanagerComponent } from './manager/studentmanager/studentmanager.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'dashboard',
      loadChildren: () => import('./coordinators/dashboard/dashboard.module')
        .then(m => m.DashboardModule),
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
      path: 'student',
      component: StudentComponent,
    },
    {
      path: 'student',
      loadChildren: () => import('./student/student.module')
        .then(m => m.StudentModule),
    },
    {
      path: 'coordinators/review',
      component: ReviewComponent,
    },
    {
      path: 'coordinators/review',
      loadChildren: () => import('./coordinators/review/review.module')
        .then(m => m.ReviewModule),
    },
    {
      path: 'manager/studentmanager',
      component: StudentmanagerComponent,
    },
    {
      path: 'manager/studentmanager',
      loadChildren: () => import('./manager/studentmanager/studentmanager.module')
        .then(m => m.StudentManagerModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: 'admin',
      component: AdminComponent,
    },
    {
      path: 'admin',
      loadChildren: () => import('./admin/admin.module')
        .then(m => m.AdminModule),
    },
    {
      path: 'staff',
      component:  StaffComponent,
    },
    {
      path: 'staff',
      loadChildren: () => import('./staff/staff.module')
        .then(m => m.StaffModule),
    },

    {
      path: 'review',
      component: ReviewComponent,
    },

    {
      path: 'guest',
      component: GuestComponent,
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
