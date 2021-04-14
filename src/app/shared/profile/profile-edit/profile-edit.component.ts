import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  userId: any;
  user: any[]=[];
  role: any;
  editForm = new FormGroup({
  name: new FormControl(''),
})
    constructor(
      private router: Router,
      private profileService: ProfileService,
    ) { }

    ngOnInit() {
      this.userId = localStorage.getItem('userId');
      this.role = localStorage.getItem('role');
      this.profileService.getProfile(this.userId).subscribe((user: any) => {
        this.user = user;
      });
    }

    edit(){
      this.profileService.updateProfile(this.userId,this.editForm.value).subscribe((result)=>
      console.log(result,"data update success")
      )

      this.router.navigate([this.role + '/' +this.userId])
    }
    // back() {
    //   this.router.navigate([this.role + '/' +this.userId ]);
    // }
}
