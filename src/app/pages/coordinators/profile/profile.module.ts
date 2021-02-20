import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NbButtonModule, NbCardBodyComponent, NbCardHeaderComponent, NbCardModule, NbDialogModule, NbDialogService, NbInputModule, NbTabComponent, NbTabsetModule, NbThemeModule } from "@nebular/theme";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { Ng2SmartTableComponent, Ng2SmartTableModule } from "ng2-smart-table";
import { ProfileDetailUpdateComponent } from "./component/profile-detail-update/profile-detail-update.component";
import { ProfileEditComponent } from "./component/profile-edit/profile-edit.component";
import { ProfileEffects } from "./effects/profile.effects";
import { ProfileComponent } from "./profile.component";
import { FeatureKey, reducer } from "./reducers";
import { Ng2CompleterModule } from "ng2-completer";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";



@NgModule({
    imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbCardModule,
    NbDialogModule.forRoot(),
    NbDialogModule.forChild(),
    CommonModule,
    NbInputModule,
    Ng2SmartTableModule,
    HttpClientModule,
    NbTabsetModule,
    FormsModule,
    ReactiveFormsModule,
    NbButtonModule,
    Ng2CompleterModule,
     StoreModule.forFeature(FeatureKey, reducer),
     EffectsModule.forFeature([ProfileEffects ])
    ],
   

    declarations: [
        ProfileComponent,
        ProfileDetailUpdateComponent,
        ProfileEditComponent,
        
    ],
    entryComponents:[ProfileEditComponent,ProfileDetailUpdateComponent ],
    exports:[ProfileEditComponent,ProfileDetailUpdateComponent ],
    providers: [],
  })
  export class ProfileModule {
  }
