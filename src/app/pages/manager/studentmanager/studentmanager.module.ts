import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NbCardBodyComponent, NbCardHeaderComponent, NbCardModule, NbTabComponent, NbTabsetModule } from "@nebular/theme";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { Ng2SmartTableComponent, Ng2SmartTableModule } from "ng2-smart-table";
import { StudentManageEffects } from "./effects/studentmanager.effects";
import { FeatureKey, reducer } from "./reducers";
import { StudentmanagerComponent } from "./studentmanager.component";


@NgModule({
    imports: [
        BrowserModule,
    NbCardModule,
    CommonModule,
    Ng2SmartTableModule,
    HttpClientModule,
    NbTabsetModule,
    
    StoreModule.forFeature(FeatureKey, reducer),
    EffectsModule.forFeature([StudentManageEffects])
    ],
   

    declarations: [
        StudentmanagerComponent,
        
     
    ],

  })
  export class StudentManagerModule {
  }
