import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NbCardBodyComponent, NbCardHeaderComponent, NbCardModule, NbTabComponent, NbTabsetModule } from "@nebular/theme";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { Ng2SmartTableComponent, Ng2SmartTableModule } from "ng2-smart-table";
import { AllComponent } from "./component/all.component";
import { ReviewEffects } from "./effects/review.effects";
import { FeatureKey, reducer } from "./reducers";
import { ReviewComponent } from "./review.component";


@NgModule({
    imports: [
        BrowserModule,
    NbCardModule,
    CommonModule,
    Ng2SmartTableModule,
    HttpClientModule,
    NbTabsetModule,
    
    StoreModule.forFeature(FeatureKey, reducer),
    EffectsModule.forFeature([ReviewEffects])
    ],
   

    declarations: [
        ReviewComponent,
        AllComponent
     
    ],

  })
  export class ReviewModule {
  }
