import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: 'pages/:id/manager',
    // canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'pages/:id/coordinator',
    // canActivate: [AuthGuardService],
    loadChildren: () => import('./coordinator/coordinator.module')
      .then(m => m.CoordinatorModule),
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
