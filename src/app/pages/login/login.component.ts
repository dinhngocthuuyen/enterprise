import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  
  navigateToCodeMaster() {
    this.route.navigate(['pages/admin'])
}
constructor(

  private route: Router) { }
}
