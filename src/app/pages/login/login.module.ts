import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbCheckboxComponent, NbCheckboxModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbMenuModule, NbSidebarModule, NbTableModule, NbTabsetComponent, NbTabsetModule, NbThemeModule, NbTreeGridModule } from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LoginComponent } from './login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

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
    
  ],
  declarations: [
    LoginComponent,
    
  ],
  exports: [ LoginComponent ],


})
export class LoginModule {
}
