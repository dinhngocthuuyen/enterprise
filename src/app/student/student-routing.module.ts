import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ChatComponent } from './chat/chat.component';
import { StudentComponent } from './student.component';
import { SendMailComponent } from './send-mail/send-mail.component';
import { UploadContributionsComponent } from './upload-contributions/upload-contributions.component';

import { UploadComponent } from './upload/upload.component';

const routes: Routes = [{
  path: '',
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
      path: 'upload-contributions',
      component: UploadContributionsComponent
    },
    {
      path: 'upload',
      component: UploadComponent
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
