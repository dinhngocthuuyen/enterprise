import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { GuestComponent } from './guest/guest.component';

export const routes: Routes = [
  {
    path: 'pages',
    //canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
<<<<<<< Updated upstream

=======
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
    path: 'student/:id',
    loadChildren: () => import('./student/student.module')
      .then(m => m.StudentModule),
  },
  {
    path: 'guest/:id',
    component: GuestComponent
  },
>>>>>>> Stashed changes
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
