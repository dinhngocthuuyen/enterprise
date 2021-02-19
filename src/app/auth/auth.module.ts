import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule } from '@nebular/theme';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AuthComponent } from './auth.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbLayoutModule,
    Ng2SmartTableModule
  ],
  declarations: [AuthComponent],
})
export class AuthModule { }
