import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ChatComponent } from './chat/chat.component';
import { StudentComponent } from './student.component';
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
      path: 'topic/:id/upload-contributions',
      component: UploadContributionsComponent
    },
    {
      path: 'topic',
      component: UploadComponent
    },
    {
      path: '',
      redirectTo: 'topic',
      pathMatch: 'full',
    },
    {
      path: '**'
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {
}
