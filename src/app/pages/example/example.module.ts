import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbButton, NbButtonComponent, NbButtonModule, NbCardModule } from '@nebular/theme';
import { ExampleComponent } from './example.component';

@NgModule({
    imports: [
        CommonModule,
        NbCardModule,
        NbButtonModule,
      
    ],
    exports: [],
    declarations: [
      ExampleComponent,
    ],
  
  })
  export class ExampleModule {
  }
  