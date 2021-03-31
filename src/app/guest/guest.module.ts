import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule, NbMenuModule,NbCheckboxModule, NbSidebarModule, NbTabsetModule, NbThemeModule, NbTagInputDirective, NbFilterInputDirective, NbTreeGridModule, NbActionsModule, NbUserModule, NbContextMenuModule, NbChatModule, NbAlertModule, NbListModule, NbWindowModule } from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './chat/chat.component';
import { GuestRoutingModule } from './guest-routing.module';
import { GuestHomeComponent } from './guest-home/guest-home.component';
import { FormsModule } from '@angular/forms';
import { config } from 'rxjs';


@NgModule({
  imports: [
    CommonModule,
    GuestRoutingModule,
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
    // NbChatModule,
    NbContextMenuModule,
    NbListModule,
    NbUserModule,
    HttpClientModule
  ],
  declarations: [
    ChatComponent,
    GuestHomeComponent,
  ],
})
export class GuestModule {
}
