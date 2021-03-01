import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ChatComponent } from './chat/chat.component';
import { GuestComponent } from './guest.component';
import { GuestHomeComponent } from './guest-home/guest-home.component';

const routes: Routes = [{
  path: '',
  component: GuestComponent,
  children: [
    {
      path: 'chat',
      component: ChatComponent,
    },

    {
      path: 'guest-home',
      component: GuestHomeComponent,
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
export class GuestRoutingModule {
}
