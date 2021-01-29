import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule, NbMenuModule,NbCheckboxModule, NbSidebarModule, NbTabsetModule, NbThemeModule, NbTagInputDirective, NbFilterInputDirective, NbTreeGridModule } from '@nebular/theme';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { FacultyComponent } from './faculty/faculty.component';
import { ManagerComponent } from './manager/manager.component';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { ExampleComponent } from './example/example.component';
import { CommonModule } from '@angular/common';
import { ExampleModule } from './example/example.module';
import { StaffComponent } from './staff/staff.component';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    NbMenuModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbLayoutModule,
    NbButtonModule,
    NbIconModule,
    NbEvaIconsModule,
    NbCheckboxModule,
    NbCardModule,
    LoginModule,
    NbTabsetModule,
    NbTreeGridModule,
  ],
  declarations: [
    PagesComponent,
    ManagerComponent,
    StaffComponent,
    UserComponent,
    // StudentComponent,
    // LoginComponent,
  ],
})
export class PagesModule {
}
