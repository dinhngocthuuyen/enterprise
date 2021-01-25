import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbLayoutModule, NbListComponent, NbListModule } from '@nebular/theme';
import { AdminComponent } from './admin.component';



@NgModule({
  imports: [
      NbCardModule,
      NbButtonModule,
      
      
    
    
  ],
  declarations: [
    AdminComponent,
  ],
})
export class AdminModule {
}
