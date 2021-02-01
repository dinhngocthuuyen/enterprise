import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NbButtonGroupModule, NbButtonModule, NbCardModule, NbFilterInputDirective, NbIconModule, NbInputDirective, NbInputModule, NbLayoutModule, NbListComponent, NbListModule, NbRadioGroupComponent, NbRadioModule, NbSidebarModule, NbSortDirection, NbSortRequest, NbTableModule, NbTabsetModule, NbTreeGridDataSource, NbTreeGridDataSourceBuilder, NbTreeGridModule } from '@nebular/theme';
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
  ],
  declarations: [
    AdminComponent,
  ],
})
export class AdminModule {
}


