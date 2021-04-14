import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule, NbIconModule, NbMenuModule, NbCardModule, NbTabsetModule, NbTreeGridModule, NbDialogModule, NbWindowModule, NbInputModule, NbContextMenuModule, NbChatModule, NbActionsModule, NbUserModule, NbOptionModule, NbSelectModule, NbDatepickerModule, NbListModule, NbAlertModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { PagesComponent } from './manager/pages.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { ROOT_REDUCERS, metaReducers } from './manager/reducers';
import { LoginComponent } from './login/login.component';
import { CoordinatorComponent } from './coordinator/coordinator.component';
import { HeaderComponent } from './shared/header/header.component';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { GuestComponent } from './guest/guest.component';
import { WebRequestInterceptor } from './services/web-request.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AccountComponent } from './admin/account/account.component';
import { ClosureComponent } from './admin/closure/closure.component';
import { TermConditionComponent } from './student/upload/term-condition/term-condition.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CoordinatorComponent,
    HeaderComponent,
    PagesComponent,
    AdminComponent,
    StudentComponent,
    GuestComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDialogModule.forRoot(),
    FlexLayoutModule,
    NbLayoutModule,
    NbButtonModule,
    NbIconModule,
    NbEvaIconsModule,
    NbCardModule,
    NbTabsetModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbActionsModule,
    NbUserModule,
    NbContextMenuModule,
    NbInputModule,
    NbListModule,
    NbOptionModule,
    HttpClientModule,
    NbWindowModule.forRoot(),
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
    }),
    EffectsModule.forRoot([]),
    ReactiveFormsModule,
    FormsModule,
    NbAlertModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: WebRequestInterceptor, multi: true}],
  bootstrap: [AppComponent],

})
export class AppModule { }
