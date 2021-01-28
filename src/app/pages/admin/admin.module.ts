import { NgModule } from '@angular/core';
import { NbButtonGroupModule, NbButtonModule, NbCardModule, NbIconModule, NbInputDirective, NbInputModule, NbLayoutModule, NbListComponent, NbListModule, NbRadioModule } from '@nebular/theme';
import { AdminComponent } from './admin.component';



@NgModule({
  imports: [
      NbCardModule,
      NbButtonModule,
      NbIconModule,
    
  ],
  declarations: [
    AdminComponent,
  ],
})
export class AdminModule {
}
