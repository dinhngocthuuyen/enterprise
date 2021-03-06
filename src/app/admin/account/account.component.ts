import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators, ReactiveFormsModule, FormBuilder, EmailValidator  } from '@angular/forms';
import { Router } from '@angular/router';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder, NbWindowService } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { FacultyService } from 'src/app/admin/services/faculty.service';
import {Role} from 'db/models'
import { Faculty } from 'src/app/models';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  signupForm = new FormGroup({
    nameInput: new FormControl(''),
    passInput: new FormControl(''),
    roleSelect: new FormControl(''),
    facultySelect: new FormControl(''),
  })
    submitted = false;

 constructor(private authService: AuthService,private facultyService: FacultyService,private formBuilder: FormBuilder) {

 }

    facultyList: Faculty [] = [];
    roleList: Role [] = [
      { role: 'admin', name: 'Admin'},
      { role: 'manager', name: 'Manager'},
      { role: 'coordinator', name: 'Coordinator'},
      { role: 'student', name: 'Student'},
      { role: 'guest', name: 'Guest'}
    ];
  


  ngOnInit() {

    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      
  });
    
     this.getFaculty();
  }

  getFaculty(): void {
    this.facultyService.getFaculties().subscribe((res: Faculty[]) => {
      const newFaculty = [
        {
          _id: '',
          name: 'None',
        },
        ...res,
      ]
      this.facultyList = newFaculty;
    });
  }

  
     // convenience getter for easy access to form fields
     get f() { return this.signupForm.controls; }

     onSubmit() {
         this.submitted = true;
 
         // stop here if form is invalid
         if (this.signupForm.invalid) {
             return;
         }
 
        //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signupForm.value))
     }


  onCreateButtonClicked(username: string, name:string, password: string, role:string, _facultyId: string){
    this.authService.create(username, name, password, role, _facultyId).subscribe((res: HttpResponse<any>) => {
      console.log(res);
      alert('SUCCESS');
    })
  }

  
}


  


 




