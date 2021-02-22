import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NbButtonGroupModule, NbButtonModule, NbCardModule, NbFilterInputDirective, NbIconModule, NbInputDirective, NbInputModule, NbLayoutModule, NbListComponent, NbListModule, NbRadioGroupComponent, NbRadioModule, NbSidebarModule, NbSortDirection, NbSortRequest, NbTableModule, NbTabsetModule, NbTreeGridDataSource, NbTreeGridDataSourceBuilder, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AdminComponent } from './admin.component';



@NgModule({
  imports: [
      NbCardModule,
      NbButtonModule,
      NbIconModule,
      NbInputModule,
      NbRadioModule,
      NbTreeGridModule,
      NbTabsetModule,
      NbTableModule,
      NbLayoutModule,
      NbSidebarModule,
      FormsModule,
      Ng2SmartTableModule,
      ReactiveFormsModule,
      BrowserModule,
  ],
  declarations: [
    AdminComponent,
  ],
})
export class AdminModule {
}


