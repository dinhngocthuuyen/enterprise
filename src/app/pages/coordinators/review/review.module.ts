import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NbButtonModule, NbCardBodyComponent, NbCardHeaderComponent, NbCardModule, NbCheckboxModule, NbInputModule, NbTabComponent, NbTabsetModule } from "@nebular/theme";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { Ng2SmartTableComponent, Ng2SmartTableModule } from "ng2-smart-table";
import { AllComponent } from "./containers/all.component";
import { ReviewEffects } from "./effects/review.effects";
import { FeatureKey, reducer } from "./reducers";
import { ReviewComponent } from "./review.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ContributionDetailComponent } from "./components/contribution-detail/contribution-detail.component";
import { DetailComponent } from "./containers/detail/detail.component";
import { Ng2CompleterModule } from "ng2-completer";
import { StatusButtonComponent } from "./components/status-button.component";
import { PendingButtonComponent } from "./components/pending-button.component";


export const CONTAINERS = [
  ReviewComponent,
  AllComponent,
  DetailComponent,

];

export const COMPONENTS = [
  ContributionDetailComponent,
  StatusButtonComponent,
  PendingButtonComponent
];

@NgModule({
    imports: [
    // BrowserModule,
    CommonModule,
    FormsModule,
    NbCardModule,
    Ng2SmartTableModule,
    HttpClientModule,
    NbTabsetModule,
    NbInputModule,
    ReactiveFormsModule,
    Ng2CompleterModule,
    NbButtonModule,
    NbCheckboxModule,
    StoreModule.forFeature(FeatureKey, reducer),
    EffectsModule.forFeature([ReviewEffects])
    ],

    declarations: [CONTAINERS, COMPONENTS],

  })
  export class ReviewModule {
  }
