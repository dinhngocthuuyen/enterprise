import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: 'manager/:id',
    loadChildren: () => import('./manager/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'coordinator',
    loadChildren: () => import('./coordinator/coordinator.module')
      .then(m => m.CoordinatorModule),
  },
  {
    path: 'admin/:id',
    loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule),
  },
  {
    path: 'account/:id',
    loadChildren: () => import('./admin/account/account.module')
      .then(m => m.AccountModule),
  },
  {
    path: 'closure/:id',
    loadChildren: () => import('./admin/closure/closure.module')
      .then(m => m.ClosureModule),
  },
  {
    path: 'student/:id',
    loadChildren: () => import('./student/student.module')
      .then(m => m.StudentModule),
  },
  {
    path: 'guest/:id',
    loadChildren: () => import('./guest/guest.module')
      .then(m => m.GuestModule),
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },

]

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
