import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AccountComponent } from './account/account.component';
import { ClosureComponent } from './closure/closure.component';


const routes: Routes = [{
  path: '',
  component: AdminComponent,
  children: [
    {
      path: 'account',
      component: AccountComponent,
    },
    {
      path: 'closure',
      component: ClosureComponent,
    },
    {
      path: '',
      redirectTo: 'account',
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
export class AdminRoutingModule {
}
