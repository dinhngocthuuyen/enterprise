import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { StaffComponent } from './staff/staff.component';
import { StudentmanagerComponent } from './manager/studentmanager/studentmanager.component';
import { viewComponent } from './viewprofile/viewprofile.component';
import { viewdetailComponent } from './viewprofile/viewprofile-detail/viewdetail.component';
import { ViewSelectedContributionsComponent } from './view-selected-contributions/view-selected-contributions.component';
import { ViewTopicsComponent } from './view-topics/view-topics.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
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
      path: 'viewprofile',
      component:  viewComponent,
    },

    {
      path: 'viewcoordinator',
      component:  viewComponent,
    },
    {
      path: 'viewdetail/:id',
      component: viewdetailComponent,
    },
    {
      path: 'topic/:id/view-selected-contributions',
      component: ViewSelectedContributionsComponent
    },
    {
      path: 'view-topics',
      component: ViewTopicsComponent
    },
    {
      path: '',
      redirectTo: 'view-topics',
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
