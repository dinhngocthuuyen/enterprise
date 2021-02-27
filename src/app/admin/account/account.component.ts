import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder, NbWindowService } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { FacultyService } from 'src/app/admin/services/faculty.service';
import { Falcuty} from 'db/models/'
import {Role} from 'db/models'
import { Faculty } from 'src/app/models';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

 constructor(private authService: AuthService,private facultyService: FacultyService,) {

 }
    facultyList: Falcuty [] = [
      { faculty: '', name: 'None' },
      { faculty: '603356d4af00f21d0d30d3b2', name: 'Math' },
      { faculty: '60335cd8418c2621094f021e', name: 'Information Technology' },
      { faculty: '6035e7e427a3bb3a91b99987', name: 'History' }
    ];
    roleList: Role [] = [
      { role: 'admin', name: 'Admin'},
      { role: 'manager', name: 'Manager'},
      { role: 'coordinator', name: 'Coordinator'},
      { role: 'student', name: 'Student'},
      { role: 'guest', name: 'Guest'}
    ];

  ngOnInit(): void {
   
     
  }
  onCreateButtonClicked(username: string, name:string, password: string, role:string, _facultyId: string){
    this.authService.create(username, name, password, role, _facultyId).subscribe((res: HttpResponse<any>) => {
      console.log(res);
    })
  }
}


  


 




