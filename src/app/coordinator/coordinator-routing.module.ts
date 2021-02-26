import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { Input, NgModule, OnInit } from '@angular/core';
import { CoordinatorComponent } from './coordinator.component';
import { ChatComponent } from './chat/chat.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReviewComponent } from './review/review.component'
import { ContributionDetailComponent } from './review/contribution-detail/contribution-detail.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { ResetPasswordComponent } from './profile/reset-password/reset-password.component';

const routes: Routes = [{
  path: ':id',
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
      path: 'dashboard',
      component: DashboardComponent,
      data: { title: "Dash" }
    },
    {
      path: 'profile/profile-edit',
      component: ProfileEditComponent,
    },
    {
      path: 'profile/reset-password',
      component: ResetPasswordComponent,
    },
    {
      path: 'review',
      component: ReviewComponent,
    },
    {
      path: 'review/:id',
      component: ContributionDetailComponent,
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
  constructor(
  ) {
  }
}
