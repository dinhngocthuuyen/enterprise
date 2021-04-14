import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule, NbMenuModule,NbCheckboxModule, NbSidebarModule, NbTabsetModule, NbThemeModule, NbTagInputDirective, NbFilterInputDirective, NbTreeGridModule, NbActionsModule, NbUserModule, NbContextMenuModule, NbChatModule, NbDialogModule } from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './chat/chat.component';
import { StudentRoutingModule } from './student-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UploadContributionsComponent } from './upload-contributions/upload-contributions.component';
import { UploadComponent } from './upload/upload.component';
import { TermConditionComponent } from './upload/term-condition/term-condition.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule,
    NbMenuModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDialogModule.forChild(),
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
    FlexLayoutModule,
    HttpClientModule
  ],
  declarations: [
    ChatComponent,
    UploadContributionsComponent,
    UploadComponent,
    TermConditionComponent
  ],
})
export class StudentModule {
}
