import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { NbCardModule } from "@nebular/theme";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { Ng2SmartTableComponent, Ng2SmartTableModule } from "ng2-smart-table";
 import { StaffEffects } from "./effects/staff.effect";
import { FeatureKey, reducer, StaffReducer } from "./reducers";
import { StaffComponent } from "./staff.component";

@NgModule({
    imports: [
        BrowserModule,
    NbCardModule,
    CommonModule,
    Ng2SmartTableModule,
    HttpClientModule,
    StoreModule.forFeature(FeatureKey, reducer),
    EffectsModule.forFeature([StaffEffects])
    ],
    declarations: [
        StaffComponent,

    ],
  
  })
  export class StaffModule {
  }