import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { GuestComponent } from './guest.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventComponent } from './guest-home/event/event.component';
import { IntroductionComponent } from './guest-home/introduction/introduction.component';
import { MagazineComponent } from './guest-home/magazine/magazine.component';

const routes: Routes = [{
  path: '',
  component: GuestComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },

    {
      path: 'event',
      component: EventComponent,
    },
    {
      path: 'introduction',
      component: IntroductionComponent,
    },

    {
      path: 'magazine',
      component: MagazineComponent,
    },
    {
      path: '',
      redirectTo: 'introduction',
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
export class GuestRoutingModule {
}
