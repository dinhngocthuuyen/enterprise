import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule, NbIconModule, NbMenuModule, NbCardModule, NbTabsetModule, NbTreeGridModule, NbDialogModule, NbWindowModule, NbInputModule, NbContextMenuModule, NbChatModule, NbActionsModule, NbUserModule, NbOptionModule, NbSelectModule, NbDatepickerModule, NbListModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { PagesComponent } from './manager/pages.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { ROOT_REDUCERS, metaReducers } from './manager/reducers';
import { StudentManagerModule } from './manager/manager/studentmanager/studentmanager.module';
import { LoginComponent } from './login/login.component';
import { CoordinatorComponent } from './coordinator/coordinator.component';
import { HeaderComponent } from './shared/header/header.component';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { GuestComponent } from './guest/guest.component';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './admin/account/account.component';
import { ClosureComponent } from './admin/closure/closure.component';
import { WebRequestInterceptor } from './services/web-request.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

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
    AccountComponent,
    ClosureComponent
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
    // NbChatModule.forRoot({ messageGoogleMapKey: 'MAP_KEY' }),
    NbDialogModule.forRoot(),
    NbDatepickerModule.forRoot(),
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
    NbOptionModule,
    NbSelectModule,
    // NbChatModule,
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
    StudentManagerModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: WebRequestInterceptor, multi: true}],
  bootstrap: [AppComponent],

})
export class AppModule { }
