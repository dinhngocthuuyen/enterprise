import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbCheckboxComponent, NbCheckboxModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbMenuModule, NbSidebarModule, NbTableModule, NbTabsetComponent, NbTabsetModule, NbThemeModule } from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    NbCardModule,
    NbCheckboxModule,
    NbCardModule,
    NbInputModule,
    NbFormFieldModule,
    NbTableModule,
    NbTabsetModule,
    
  ],
  declarations: [
    LoginComponent,
  ],
})
export class LoginModule {
}
