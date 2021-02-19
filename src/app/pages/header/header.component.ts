import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from '../users/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userMenu = [ {
    title: 'Log out',
    link: 'pages/faculty'
   } ];
   @Input() user;
  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private authService: AuthService,
    private router: Router
  ) {
    // this.authService.getUserProfile(id).subscribe(res => {
    //   this.currentUser = res.msg;
    // })
  }
  currentUser: Object = {};
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
    // this.userService.getUsers().subscribe((users: any ) =>
    // this.users = users);
  }
  selectedIcon!: [];
  navigateToChat(event) {
    console.log('youre '  )
  }
}
