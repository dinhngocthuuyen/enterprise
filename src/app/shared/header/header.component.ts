import { Component, Input, OnInit, Output } from '@angular/core';
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
  }
  userId!: string;

  ngOnInit(): void {
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     console.log(params);
    //     this.userService.getUser(params.id).subscribe((user: any) => {
    //       this.user = user;
    //     })
    //   }
    // )
    this.userId = this.route.snapshot.params.id;
    // console.log("id: " + this.userId)
    this.userService.getUser(this.userId).subscribe((user: any) => {
      this.user = user;
    })
  };

}
