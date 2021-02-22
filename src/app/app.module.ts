import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule, NbIconModule, NbMenuModule, NbCardModule, NbTabsetModule, NbTreeGridModule, NbDialogModule, NbWindowModule, NbInputModule, NbContextMenuModule, NbChatModule, NbActionsModule, NbUserModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { DashboardComponent } from './manager/coordinators/dashboard/dashboard.component';
import { PagesComponent } from './manager/pages.component';
import { LoginModule } from './manager/login/login.module';
//import { LoginComponent } from './pages/login/login.component';
import { FacultyModule } from './manager/faculty/faculty.module';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ROOT_REDUCERS, metaReducers } from './manager/reducers';
import { ReviewModule } from './manager/coordinators/review/review.module';
import { StudentManagerModule } from './manager/manager/studentmanager/studentmanager.module';
import { ProfileModule } from './manager/coordinators/profile/profile.module';
import { DashboardModule } from './manager/coordinators/dashboard/dashboard.module';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { WebRequestInterceptor } from './services/web-request.interceptor';
import { CoordinatorComponent } from './coordinator/coordinator.component';
import { HeaderComponent } from './shared/header/header.component';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { GuestComponent } from './guest/guest.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CoordinatorComponent,
    HeaderComponent,
    PagesComponent,
    AdminComponent,
    StudentComponent,
    GuestComponent
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
    // NbChatModule,
    NbContextMenuModule,
    NbInputModule,
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
    FacultyModule,
    ReviewModule,
    StudentManagerModule,
    ProfileModule,
    DashboardModule,
  ],
  providers: [AuthGuardService, {provide: HTTP_INTERCEPTORS, useClass: WebRequestInterceptor, multi: true}],
  bootstrap: [AppComponent],

})
export class AppModule { }
