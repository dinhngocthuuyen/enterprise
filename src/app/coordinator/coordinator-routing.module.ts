import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CoordinatorComponent } from './coordinator.component';
import { ChatComponent } from './chat/chat.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileDetailUpdateComponent } from './profile/component/profile-detail-update/profile-detail-update.component';
import { CorContributionComponent } from './dashboard/containers/cor-contribution/cor-contribution.component';


const routes: Routes = [{
  path: '',
  component: CoordinatorComponent,
  children: [
    {
      path: 'chat',
      component: ChatComponent,
    },

    {
      path: 'profile',
      component: ProfileComponent,
    },
    {
      path: 'profile/:id',
      component: ProfileDetailUpdateComponent,
    },
  
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'dashboard/:coordinatorId',
      component: CorContributionComponent,
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
export class CoordinatorRoutingModule {
}
