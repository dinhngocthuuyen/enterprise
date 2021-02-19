import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor( private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (!form.valid){
      return;
    }
    const username = form.value.username;
    const password = form.value.password;

    this.authService.signup(username, password).subscribe(resData => {
      console.log(resData)
    }, error => {
      console.log(error);
    });
    form.reset();
  }

}
