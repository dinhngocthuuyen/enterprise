import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule, NbIconModule, NbMenuModule, NbCardModule, NbTabsetModule, NbTreeGridModule, NbDialogModule, NbWindowModule, NbInputModule, NbContextMenuModule, NbChatModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { DashboardComponent } from './pages/coordinators/dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { LoginModule } from './pages/login/login.module';
//import { LoginComponent } from './pages/login/login.component';
import { FacultyModule } from './pages/faculty/faculty.module';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ROOT_REDUCERS, metaReducers } from './pages/reducers';
import { ReviewModule } from './pages/coordinators/review/review.module';
import { StudentManagerModule } from './pages/manager/studentmanager/studentmanager.module';
import { ProfileModule } from './pages/coordinators/profile/profile.module';
import { DashboardModule } from './pages/coordinators/dashboard/dashboard.module';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { WebRequestInterceptor } from './services/web-request.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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
    // AuthModule,
  ],
  providers: [AuthGuardService, {provide: HTTP_INTERCEPTORS, useClass: WebRequestInterceptor, multi: true}],
  bootstrap: [AppComponent],

})
export class AppModule { }
