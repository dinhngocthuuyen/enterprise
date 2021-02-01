import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbTabsetModule } from "@nebular/theme";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { Ng2SmartTableModule } from "ng2-smart-table";

import { LoginComponent } from "../login/login.component";
import { LoginModule } from "../login/login.module";
import { FacultyEffects } from "./effects/faculty.effects";
import { FacultyComponent } from "./containers/faculty.component";
import { FeatureKey, reducer } from "./reducers";
import { FacultyListComponent } from "./components/faculty-list.component";

export const CONTAINERS = [
  FacultyComponent,
];

export const COMPONENTS = [
  FacultyListComponent,
];
@NgModule({
    imports: [
        
      CommonModule,
      FormsModule,
      NbCardModule,
      NbTabsetModule,
      NbIconModule,
      NbEvaIconsModule,
      Ng2SmartTableModule,
      LoginModule,
      NbInputModule,
      NbButtonModule,
      StoreModule.forFeature(FeatureKey, reducer),
      EffectsModule.forFeature([FacultyEffects])
    ],
    declarations: [CONTAINERS, COMPONENTS],
    
})
export class FacultyModule { }
