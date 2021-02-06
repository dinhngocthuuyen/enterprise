import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NbCardBodyComponent, NbCardHeaderComponent, NbCardModule, NbInputModule, NbTabComponent, NbTabsetModule } from "@nebular/theme";
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
import { ReviewPageComponent } from "./review-page.component";
import { ReviewRoutingModule } from "./review-routing.module";

export const CONTAINERS = [
  ReviewComponent,
  AllComponent,
  DetailComponent
];

export const COMPONENTS = [
  ReviewPageComponent,
  ContributionDetailComponent,
];

@NgModule({
    imports: [
    CommonModule,
    FormsModule,
    // BrowserModule,
    NbCardModule,
    Ng2SmartTableModule,
    HttpClientModule,
    NbTabsetModule,
    NbInputModule,
    ReactiveFormsModule,
    Ng2CompleterModule,
    ReviewRoutingModule,
    StoreModule.forFeature(FeatureKey, reducer),
    EffectsModule.forFeature([ReviewEffects])
    ],

    declarations: [CONTAINERS, COMPONENTS, ContributionDetailComponent],

  })
  export class ReviewModule {
  }
