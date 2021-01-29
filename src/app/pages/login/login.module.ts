import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbCheckboxComponent, NbCheckboxModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbMenuModule, NbSidebarModule, NbTableModule, NbTabsetComponent, NbTabsetModule, NbThemeModule, NbTreeGridModule } from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LoginComponent } from './login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    NbCardModule,
    NbCheckboxModule,
    NbCardModule,
    NbInputModule,
    NbFormFieldModule,
    NbTableModule,
    NbTabsetModule,
    NbLayoutModule,
    NbSidebarModule,
<<<<<<< HEAD
    FormsModule
=======
    FormsModule,
    NbButtonModule,
    NbTabsetModule,
>>>>>>> 0c0823c0ba5cec8ad199693ecdd000a6e571fa41
  ],
  exports: [LoginComponent],
  declarations: [
    LoginComponent,
  ],

})
export class LoginModule {
}
