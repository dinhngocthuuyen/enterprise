import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder, NbWindowService } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/models';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  
  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      username: {
        title: 'User Name',
        type: 'string'
      },
      name: {
        title: 'Full Name',
        type: 'string'
      },
      email: {
        title: 'Email'
      },
    },
      actions: false, 
  };

  closure = {
    columns: {
      fal: {
        title: 'Falcuty',
        type: 'string'
      },
      stdate: {
        title: 'Start Date',
        type: 'date'
      },
      endate: {
        title: 'End Date',
        type: 'date'
      },
    },
      actions: false, 
  };

 constructor(

  private route: Router) { }
     username = "";
     email = "";
     password = "";
  
     onSubmit(formCreate: any) {
       console.log(formCreate.value);
     }

     ngOnInit(): void {

    }
  }

 




