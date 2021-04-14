import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { CoorService } from '../../coordinator/services/review.service';

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
  role: any;
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
        // this.facId = localStorage.getItem('facId');
        // this.profileService.getFaculty(this.facId).subscribe((faculty: any) => {
        //   this.faculty = faculty;
        // });
}


profileEdit() {
  this.router.navigate([ '/profile/'+this.userId +'/profile-edit'])
}
back() {
  this.router.navigate([ this.role + '/' + this.userId ])
}
}
