import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule, NbMenuModule,NbCheckboxModule, NbSidebarModule, NbTabsetModule, NbThemeModule, NbTagInputDirective, NbFilterInputDirective, NbTreeGridModule, NbActionsModule, NbUserModule, NbContextMenuModule, NbChatModule } from '@nebular/theme';
import { PagesRoutingModule } from './pages-routing.module';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpClientModule } from '@angular/common/http';
import { viewComponent } from './viewprofile/viewprofile.component';
import { viewdetailComponent } from './viewprofile/viewprofile-detail/viewdetail.component';
import { ViewSelectedContributionsComponent } from './view-selected-contributions/view-selected-contributions.component';
import { ViewTopicsComponent } from './view-topics/view-topics.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
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
    NbContextMenuModule,
    HttpClientModule,
  ],
  declarations: [
    viewComponent,
    viewdetailComponent,
    ViewSelectedContributionsComponent,
    ViewTopicsComponent
  ],
})
export class PagesModule {
}
