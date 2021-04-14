import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule, NbMenuModule,NbCheckboxModule, NbSidebarModule, NbTabsetModule, NbThemeModule, NbTagInputDirective, NbFilterInputDirective, NbTreeGridModule, NbActionsModule, NbUserModule, NbContextMenuModule, NbChatModule, NbAlertModule, NbListModule, NbWindowModule } from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpClientModule } from '@angular/common/http';
import { GuestRoutingModule } from './guest-routing.module';
import { FormsModule } from '@angular/forms';
import { config } from 'rxjs';
import { EventComponent } from './guest-home/event/event.component';
import { IntroductionComponent } from './guest-home/introduction/introduction.component';
import { MagazineComponent } from './guest-home/magazine/magazine.component';
import { DashboardComponent } from './dashboard/dashboard.component';


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
    EventComponent,
    IntroductionComponent,
    MagazineComponent,
    DashboardComponent
  ],
})
export class GuestModule {
}
