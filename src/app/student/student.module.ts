import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule, NbMenuModule,NbCheckboxModule, NbSidebarModule, NbTabsetModule, NbThemeModule, NbTagInputDirective, NbFilterInputDirective, NbTreeGridModule, NbActionsModule, NbUserModule, NbContextMenuModule, NbChatModule } from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './chat/chat.component';
import { StudentRoutingModule } from './student-routing.module';
import { SendMailComponent } from './send-mail/send-mail.component';
import { ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import { UploadContributionsComponent } from './upload-contributions/upload-contributions.component';

=======
import { UploadComponent} from './upload/upload.component';
>>>>>>> 3133c257194bc0eeaa1f17a0bb5846321d4321e7
@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule,
    NbMenuModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbLayoutModule,
    NbButtonModule,
    NbIconModule,
    NbEvaIconsModule,
    NbCheckboxModule,
    NbCardModule,
    NbTabsetModule,
    NbTreeGridModule,
    Ng2SmartTableModule,
    NbActionsModule,
    NbUserModule,
    ReactiveFormsModule,
    NbContextMenuModule,
    NbChatModule,
    HttpClientModule
  ],
  declarations: [
    ChatComponent,
    SendMailComponent,
<<<<<<< HEAD
    UploadContributionsComponent
=======
    UploadComponent
>>>>>>> 3133c257194bc0eeaa1f17a0bb5846321d4321e7
  ],
})
export class StudentModule {
}
