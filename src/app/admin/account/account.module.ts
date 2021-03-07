import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NbAlertModule, NbButtonGroupModule, NbButtonModule, NbCardModule, NbFilterInputDirective, NbIconModule, NbInputDirective, NbInputModule, NbLayoutModule, NbListComponent, NbListModule, NbOptionModule, NbRadioGroupComponent, NbRadioModule, NbSelectModule, NbSidebarModule, NbSortDirection, NbSortRequest, NbTableModule, NbTabsetModule, NbTreeGridDataSource, NbTreeGridDataSourceBuilder, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AccountComponent } from './account.component';

@NgModule({
  imports: [
      NbButtonModule,
      NbIconModule,
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
      NbAlertModule,
      NbOptionModule,
      
      
  ],
  declarations: [
  ],
})
export class AccountModule {
}


