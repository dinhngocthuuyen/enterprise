import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './coordinators/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FacultyComponent } from './faculty/containers/faculty.component';

import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { StaffComponent } from './staff/staff.component';
import { ReviewComponent } from './coordinators/review/review.component';
import { GuestComponent } from './guest/guest.component';
import { StudentmanagerComponent } from './manager/studentmanager/studentmanager.component';
import { ProfileComponent } from './coordinators/profile/profile.component';
import { GuestDetailComponent } from './guest/guest-detail/guest-detail.component';
import { DetailComponent } from './coordinators/review/containers/detail/detail.component';
import { CorContributionComponent } from './coordinators/dashboard/containers/cor-contribution/cor-contribution.component';
import { ChatComponent } from './chat/chat.component';
import { ProfileDetailUpdateComponent } from './coordinators/profile/component/profile-detail-update/profile-detail-update.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'dashboard/:coordinatorId',
      component: CorContributionComponent,
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
      path: 'coordinators/review/:id',
      component: DetailComponent,
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
      path: 'coordinators/profile',
      component: ProfileComponent,
    },
    {
      path: 'coordinators/profile/profile-detail-update/:id',
      component: ProfileDetailUpdateComponent,
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

    // {
    //   path: 'review',
    //   component: ReviewComponent,
    // },

    {
      path: 'guest/:id',
      component: GuestComponent,
    },

    {
      path: 'guest/guest-detail/:id',
      component: GuestDetailComponent
    },

    {
      path: 'chat',
      component: ChatComponent,
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
