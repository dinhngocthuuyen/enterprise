import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbTabsetModule } from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";

import { LoginComponent } from "../login/login.component";
import { LoginModule } from "../login/login.module";
import { FacultyComponent } from "./faculty.component";

@NgModule({
    imports: [
        FormsModule,
        NbCardModule,
        NbTabsetModule,
        NbIconModule,
        NbEvaIconsModule,
        Ng2SmartTableModule,
        LoginModule,
        NbInputModule,
        NbButtonModule,
        CommonModule
    ],
    declarations: [
        FacultyComponent,
    ],
})
export class FacultyModule { }
