import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule, NbMenuModule,NbCheckboxModule, NbSidebarModule, NbTabsetModule, NbThemeModule, NbTagInputDirective, NbFilterInputDirective, NbTreeGridModule } from '@nebular/theme';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { FacultyComponent } from './faculty/containers/faculty.component';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StaffComponent } from './staff/staff.component';
import { ROOT_REDUCERS,metaReducers} from './reducers';
import { ReviewComponent } from './coordinators/review/review.component';
import { GuestComponent } from './guest/guest.component';
import { StudentmanagerComponent } from './manager/studentmanager/studentmanager.component';
import { CoordinatorsmanagerComponent } from './manager/coordinatorsmanager/coordinatorsmanager.component';
import { ProfileComponent } from './coordinators/profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
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
    GuestComponent,
    
    // StudentComponent,
    // LoginComponent,
  ],
})
export class PagesModule {
}
