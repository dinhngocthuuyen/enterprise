import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NbButtonGroupComponent, NbButtonGroupModule, NbButtonModule, NbCardBodyComponent, NbCardHeaderComponent, NbCardModule, NbCheckboxComponent, NbCheckboxModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbMenuModule, NbRadioComponent, NbRadioGroupComponent, NbRadioModule, NbSidebarModule, NbTableModule, NbTabsetComponent, NbTabsetModule, NbThemeModule, NbTreeGridModule, } from '@nebular/theme';

import { StudentComponent } from './student.component';


@NgModule({
  imports: [
    NbLayoutModule,
    NbButtonGroupModule,
    NbSidebarModule,
    NbMenuModule.forRoot(),
    NbCardModule,
    NbTableModule,
    NbTabsetModule
  ],
  exports: [StudentComponent],
  declarations: [
  StudentComponent,


  ],

})
export class StudentModule {

}

