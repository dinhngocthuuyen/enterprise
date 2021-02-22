import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from './user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userMenu = [{
    title: 'Log out',
    link: 'login'
   }];
   @Input() user;
  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
  ) {
    // this.authService.getUserProfile(id).subscribe(res => {
    //   this.currentUser = res.msg;
    // })
  }
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params);
        this.userService.getUser(params.id).subscribe((user: any) => {
          console.log(user);
          this.user = user;
        })
      }
    )
  }
}
