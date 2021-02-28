import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NbButtonGroupModule, NbButtonModule, NbCardModule, NbDatepickerModule, NbFilterInputDirective, NbIconModule, NbInputDirective, NbInputModule, NbLayoutModule, NbListComponent, NbListModule, NbRadioGroupComponent, NbRadioModule, NbSelectModule, NbSidebarModule, NbSortDirection, NbSortRequest, NbTableModule, NbTabsetModule, NbTimepickerModule, NbTreeGridDataSource, NbTreeGridDataSourceBuilder, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ClosureComponent } from './closure.component';


@NgModule({
  imports: [
      NbButtonModule,
      NbInputModule,
      NbRadioModule,
      NbTabsetModule,
      NbTableModule,
      NbLayoutModule,
      NbSidebarModule,
      FormsModule,
      Ng2SmartTableModule,
      ReactiveFormsModule,
      BrowserModule,
      NbSelectModule,
      NbDatepickerModule,
      NbTimepickerModule
      

  ],
  declarations: [
      
  ],
})
export class ClosureModule {
}


