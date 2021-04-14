import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from './user.service';
import { NbMenuService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userMenu = [
  {
    title: 'Profile',
    data: {id: 'profile'}

   },
  {
    title: 'Log out',
    data: {id: 'logout'}
  }];
  @Input() user;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsersService,
    private nbMenuService: NbMenuService,
    private authService: AuthService
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

    this.nbMenuService.onItemClick().pipe(
      filter(({ tag }) => tag === 'my-context-menu'),
      map(({ item: { title } }) => title),
    ).subscribe((title) => {
      if (title ==="Log out") { this.authService.logout() }
      else {
       this.router.navigate(['/profile/' + this.userId])
      }
    })
  }
}
