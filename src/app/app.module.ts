import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< Updated upstream
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule, NbIconModule, NbMenuModule, NbCardModule, NbTabsetModule, NbTreeGridModule, NbDialogModule, NbWindowModule, NbInputModule } from '@nebular/theme';
=======
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule, NbIconModule, NbMenuModule, NbCardModule, NbTabsetModule, NbTreeGridModule, NbDialogModule, NbWindowModule, NbInputModule, NbContextMenuModule, NbChatModule, NbActionsModule, NbUserModule, NbAccordionModule } from '@nebular/theme';
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
import { AuthGuardService } from './services/auth-guard.service';
import { WebRequestInterceptor } from './services/web-request.interceptor';





=======
import { CoordinatorComponent } from './coordinator/coordinator.component';
import { HeaderComponent } from './shared/header/header.component';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { GuestComponent } from './guest/guest.component';
import { WebRequestInterceptor } from './services/web-request.interceptor';
import { Ng2SmartTableModule } from 'ng2-smart-table';
>>>>>>> Stashed changes

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
    NbLayoutModule,
    NbButtonModule,
    NbIconModule,
    NbEvaIconsModule,
    NbCardModule,
    NbTabsetModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
<<<<<<< Updated upstream
=======
    NbActionsModule,
    NbUserModule,
    // NbChatModule,
    NbContextMenuModule,
    NbAccordionModule,
>>>>>>> Stashed changes
    NbInputModule,
    HttpClientModule,

    NbWindowModule.forRoot(),
    // StoreModule.forRoot({ count: exampleReducer, count2: counterReducer }),
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
<<<<<<< Updated upstream
    ProfileModule,
    DashboardModule
  ],
  providers: [AuthGuardService, {provide: HTTP_INTERCEPTORS, useClass: WebRequestInterceptor, multi: true}],
=======
    Ng2SmartTableModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: WebRequestInterceptor, multi: true}],
>>>>>>> Stashed changes
  bootstrap: [AppComponent],

})
export class AppModule { }
