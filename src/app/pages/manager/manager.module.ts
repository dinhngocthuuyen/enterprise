import { NgModule } from '@angular/core';
import { NbCardModule, NbLayoutModule, NbListComponent, NbListModule } from '@nebular/theme';
import { ManagerComponent } from './manager.component';


@NgModule({
  imports: [
      NbLayoutModule,
      NbCardModule,
      
    
    
  ],
  declarations: [
    ManagerComponent,
  ],
})
export class ManagerModule {
}
