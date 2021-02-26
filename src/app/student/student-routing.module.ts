import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ChatComponent } from './chat/chat.component';
import { StudentComponent } from './student.component';
import { SendMailComponent } from './send-mail/send-mail.component';

const routes: Routes = [{
  path: ':id',
  component: StudentComponent,
  children: [
    {
      path: 'chat',
      component: ChatComponent,
    },
    {
      path: 'sendMail',
      component: SendMailComponent,
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
export class StudentRoutingModule {
}
