import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Coordinator } from 'src/app/models';
import { User } from 'src/app/models/user';
import { CoorService } from '../../services/review.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  userId: any;
  user: any[]=[];
    constructor(
      private store: Store<User>,
      private router: Router,
      private route: ActivatedRoute,
      private profileService: CoorService,
      // protected dialogRef: NbDialogRef<ProfileEditComponent>
    ) { }

    ngOnInit() {
      this.userId = localStorage.getItem('userId');
      this.profileService.getProfile(this.userId).subscribe((user: any) => {
        this.user = user;
      });
    }
 
    edit( username: string, password: string,name: string ){
      
      this.profileService.updateProfile(this.userId, username,password,name).subscribe()
      this.router.navigate(['coordinator/'+this.userId +'/profile'])

    }
}