import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule, NbMenuModule,NbCheckboxModule, NbSidebarModule, NbTabsetModule, NbThemeModule, NbTagInputDirective, NbFilterInputDirective, NbTreeGridModule, NbActionsModule, NbUserModule, NbContextMenuModule, NbChatModule, NbDialogModule } from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpClientModule } from '@angular/common/http';
import { CoordinatorRoutingModule } from './coordinator-routing.module';
import { ChatComponent } from './chat/chat.component';
import { StoreModule } from '@ngrx/store';
import { FeatureKey, reducer } from './profile/reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from './profile/effects/profile.effects';

@NgModule({
  imports: [
    CommonModule,
    CoordinatorRoutingModule,
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
    NbDialogModule.forRoot(),
    // NbChatModule,
    NbContextMenuModule,
    HttpClientModule,
    StoreModule.forFeature(FeatureKey, reducer),
    EffectsModule.forFeature([ProfileEffects ])
  ],
  declarations: [
    ChatComponent
  ],
})
export class CoordinatorModule {
}
