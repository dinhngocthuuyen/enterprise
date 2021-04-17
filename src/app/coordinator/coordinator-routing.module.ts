import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { Input, NgModule, OnInit } from '@angular/core';
import { CoordinatorComponent } from './coordinator.component';
import { ChatComponent } from './chat/chat.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReviewComponent } from './review/review.component'
import { ContributionDetailComponent } from './review/contribution-detail/contribution-detail.component';
import { ChatListComponent } from './chat/chat-list.component';
import { ViewTopicComponent } from './review/view-topic/view-topic.component';

const routes: Routes = [{
  path: ':id',
  component: CoordinatorComponent,
  children: [
    {
      path: 'chatlist',
      component: ChatListComponent,
    },
    {
      path: 'chat/:id',
      component: ChatComponent,
    },
    // {
    //   path: 'dashboard',
    //   component: DashboardComponent,
    //   data: { title: "Dash" }
    // },
    {
      path: 'review/:id',
      component: ContributionDetailComponent,
    },
    {
      path: 'topic',
      component: ViewTopicComponent,
    },
    {
      path: 'topic/:id/review',
      component: ReviewComponent,
    },
    {
      path: '',
      redirectTo: 'topic',
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
