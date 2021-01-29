import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule, NbIconModule, NbMenuModule, NbCardModule, NbTabsetModule, NbTreeGridModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbSidebarModule.forRoot(),
    NbMenuModule,
    NbLayoutModule,
    NbButtonModule,
    NbIconModule,
    NbEvaIconsModule,
    NbCardModule,
    NbTabsetModule,
    StoreModule.forRoot({ count: exampleReducer, count2: counterReducer }),


  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
