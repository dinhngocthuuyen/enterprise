import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Coordinator } from 'src/app/models';
import { User } from 'src/app/models/user';
import { CoorService } from '../services/review.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',

  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userId: any;
  user: any[]=[];
  facId: any;
  faculty: any[]=[];

  // public editProfileForm: FormGroup;

  constructor(
    private store: Store<User>,
    private router: Router,
    private route: ActivatedRoute,
    private profileService: CoorService,

  ){

  }
  ngOnInit() {
    this.userId = localStorage.getItem('userId');
    this.profileService.getProfile(this.userId).subscribe((user: any) => {
      this.user = user;
    });
}


profileEdit() {
  this.router.navigate([ 'coordinator/'+this.userId +'/profile/profile-edit'])
}
resetPassword() {
  this.router.navigate([ 'coordinator/'+this.userId +'/profile/reset-password'])
}
back() {
  this.router.navigate([ 'coordinator/'+this.userId +'/dashboard'])
}
}
