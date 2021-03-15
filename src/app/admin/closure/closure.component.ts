import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder, NbWindowService } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { FacultyService } from 'src/app/admin/services/faculty.service';
import { Faculty } from 'src/app/models';
import { ClosureService } from 'src/app/admin/services/closure.service';
import { Closure } from 'src/app/models';



@Component({
  selector: 'app-closure',
  templateUrl: './closure.component.html',
  styleUrls: ['./closure.component.scss']
})
export class ClosureComponent implements OnInit {

  deadlineForm = new FormGroup({
    startdate: new FormControl(),
    deadline1: new FormControl(),
    deadline2: new FormControl(),
    _facultyId: new FormControl(),
  })
  
  isAlert: boolean = false;



 constructor(private authService: AuthService, private facultyService: FacultyService, private closureService: ClosureService,){
   
 }

    facultyList: Faculty [] = [];

  ngOnInit(): void {
    this.getFaculty();

    this.getClosure();
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

  getClosure(): void {
    this.closureService.getClosures().subscribe((res: Closure[]) => {
    });
  }

  onSubmit() {

      const startdate: string = this.deadlineForm.value.startdate;
      const deadline1: string = this.deadlineForm.value.deadline1;
      const deadline2: string = this.deadlineForm.value.deadline2;
      const _facultyId: any = this.deadlineForm.value._facultyId;
      
      this.authService.submit(startdate, deadline1, deadline2, _facultyId).subscribe((res: HttpResponse<any>) => {
        console.log('res', res);
        
      });
      this.isAlert = true;
    }

    onUpdate() {

      const startdate: string = this.deadlineForm.value.startdate;
      const deadline1: string = this.deadlineForm.value.deadline1;
      const deadline2: string = this.deadlineForm.value.deadline2;
      const _facultyId: any = this.deadlineForm.value._facultyId;
      
      this.authService.update(startdate, deadline1, deadline2, _facultyId).subscribe((res: HttpResponse<any>) => {
        console.log('res', res);
        
      });
      this.isAlert = true;
    }
  // onSubmitButtonClicked(startdate: String, deadline1:String, deadline2: String, _facultyId: string){
  //   this.authService.submit(startdate, deadline1, deadline2, _facultyId ).subscribe((res: HttpResponse<any>) => {
  //     console.log(res);
  //   })
  // }

  doSomething() {
    this.isAlert = true;
  }


  
}