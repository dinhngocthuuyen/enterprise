import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/models';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  navigateToCodeMaster() {
    this.route.navigate(['pages/admin'])
 }

 constructor(

  private route: Router) { }
 
     email = "";
     password = "";
  
     onSubmit(formSignIn: any) {
       console.log(formSignIn.value);
     }

     ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
  }
 export class SignInComponent {

  
}



