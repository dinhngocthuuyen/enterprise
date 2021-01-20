import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NbCardModule, NbTabsetModule } from "@nebular/theme";
import { FacultyComponent } from "./faculty.component";

@NgModule({
    imports: [
        FormsModule,
        NbCardModule,
        NbTabsetModule,
        
    ],
    declarations: [
        FacultyComponent,
    ]
})
export class FacultyModule { }
