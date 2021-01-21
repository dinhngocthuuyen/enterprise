import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { NbCardModule, NbIconModule, NbTabsetModule, NbTreeGridModule } from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";

import { FacultyComponent } from "./faculty.component";

@NgModule({
    imports: [
        FormsModule,
        NbCardModule,
        NbTabsetModule,
        NbTreeGridModule,
        NbIconModule,
        NbEvaIconsModule,
        Ng2SmartTableModule
    ],
    declarations: [
        FacultyComponent,
    ]
})
export class FacultyModule { }
