import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  ],
  declarations: [
    AdminComponent,
  ],
})
export class AdminModule {
}


