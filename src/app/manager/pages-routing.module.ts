import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';

import { viewComponent } from './viewprofile/viewprofile.component';
import { viewdetailComponent } from './viewprofile/viewprofile-detail/viewdetail.component';
import { ViewSelectedContributionsComponent } from './view-selected-contributions/view-selected-contributions.component';
import { ViewTopicsComponent } from './view-topics/view-topics.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [

    // {
    //   path: '',
    //   redirectTo: 'dashboard',
    //   pathMatch: 'full',
    // },

    {
      path: 'viewprofile',
      component:  viewComponent,
    },

    // {
    //   path: 'viewcoordinator',
    //   component:  viewComponent,
    // },
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
