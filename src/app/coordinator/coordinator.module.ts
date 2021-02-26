import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule, NbMenuModule,NbCheckboxModule, NbSidebarModule, NbTabsetModule, NbThemeModule, NbTagInputDirective, NbFilterInputDirective, NbTreeGridModule, NbActionsModule, NbUserModule, NbContextMenuModule, NbChatModule, NbDialogModule, NbAccordionModule, NbInputModule } from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpClientModule } from '@angular/common/http';
import { CoordinatorRoutingModule } from './coordinator-routing.module';
import { ChatComponent } from './chat/chat.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ReviewComponent } from './review/review.component';
import { ContributionDetailComponent } from './review/contribution-detail/contribution-detail.component';
import { CommentComponent } from './review/comment/comment.component';

@NgModule({
  imports: [
    CommonModule,
    CoordinatorRoutingModule,
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
    NbInputModule,
    NbAccordionModule,
    NbDialogModule.forRoot(),
    NbChatModule,
    NbContextMenuModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    ChatComponent,
    ProfileComponent,
    DashboardComponent,
    ProfileEditComponent,
    ReviewComponent,
    ContributionDetailComponent,
    CommentComponent,
  ],
})
export class CoordinatorModule {
}
