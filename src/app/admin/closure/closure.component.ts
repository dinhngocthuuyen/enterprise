import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder, NbWindowService } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';




@Component({
  selector: 'app-closure',
  templateUrl: './closure.component.html',
  styleUrls: ['./closure.component.scss']
})
export class ClosureComponent implements OnInit {


 constructor(private authService: AuthService){
   
 }
  ngOnInit(): void {
  }
  
  onSubmitButtonClicked(startdate: String, deadline1:String, deadline2: String){
    this.authService.submit(startdate, deadline1, deadline2).subscribe((res: HttpResponse<any>) => {
      console.log(res);
    })
  }
  
  
}
  


 




