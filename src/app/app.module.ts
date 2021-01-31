import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule, NbIconModule, NbMenuModule, NbCardModule, NbTabsetModule, NbTreeGridModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { LoginModule } from './pages/login/login.module';
import { LoginComponent } from './pages/login/login.component';
import { FacultyModule } from './pages/faculty/faculty.module';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ROOT_REDUCERS, metaReducers } from './pages/reducers';


@NgModule({
  declarations: [
    AppComponent,
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
    // StoreModule.forRoot({ faculties: reducer}),
    EffectsModule.forRoot([]),
    FacultyModule
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25, // Retains last 25 states
    //   logOnly: environment.production, // Restrict extension to log-only mode
    // }),
    // StoreRouterConnectingModule.forRoot(),
    // RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
