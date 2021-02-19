import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLoginButtonClicked(username: string, password: string){
    this.authService.login(username, password).subscribe((res: HttpResponse<any>) => {
      console.log(res);
      
      this.router.navigate(['pages/guest/'+ res.body._id]);
    })
  }

}
