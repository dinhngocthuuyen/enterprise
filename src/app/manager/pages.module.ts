import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule, NbMenuModule,NbCheckboxModule, NbSidebarModule, NbTabsetModule, NbThemeModule, NbTagInputDirective, NbFilterInputDirective, NbTreeGridModule, NbActionsModule, NbUserModule, NbContextMenuModule, NbChatModule } from '@nebular/theme';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LoginModule } from './login/login.module';
import { CommonModule } from '@angular/common';
import { GuestComponent } from './guest/guest.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpClientModule } from '@angular/common/http';
import { GuestDetailComponent } from './guest/guest-detail/guest-detail.component';
import { HeaderComponent } from '../shared/header/header.component';
import { ChatComponent } from './chat/chat.component';

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
    LoginModule,
    NbTabsetModule,
    NbTreeGridModule,
    Ng2SmartTableModule,
    NbActionsModule,
    NbUserModule,
    // NbChatModule,
    NbContextMenuModule,
    HttpClientModule,
  ],
  declarations: [
    // PagesComponent,
    GuestComponent,
    GuestDetailComponent,
    // StudentComponent,
    // LoginComponent,
    ChatComponent
  ],
})
export class PagesModule {
}
