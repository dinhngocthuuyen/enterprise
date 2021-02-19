import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';

export const routes: Routes = [
  {
    path: 'pages',
    //canActivate: [AuthGuardService],
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
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
