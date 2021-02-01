import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule } from '@nebular/theme';
import { DashboardComponent } from './dashboard.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbLayoutModule,
  ],
  declarations: [DashboardComponent],
})
export class DashboardModule { }
