import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CoordinatorComponent } from './coordinator.component';
import { ChatComponent } from './chat/chat.component';


const routes: Routes = [{
  path: '',
  component: CoordinatorComponent,
  children: [
    {
      path: 'chat',
      component: ChatComponent,
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
