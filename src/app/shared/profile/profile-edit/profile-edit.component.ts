import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Coordinator } from 'src/app/models';
import { User } from 'src/app/models/user';
import { CoorService } from '../../../coordinator/services/review.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  userId: any;
  user: any[]=[];
  // @Input() user;
  role: any;
  editForm = new FormGroup({
  name: new FormControl(''),
  username: new FormControl(''),
})
    constructor(
      private store: Store<User>,
      private router: Router,
      private route: ActivatedRoute,
      private profileService: CoorService,
      // protected dialogRef: NbDialogRef<ProfileEditComponent>
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

      this.router.navigate([this.role + '/'+this.userId])
    }
    back() {
      this.router.navigate([this.role + '/'+this.userId ])
    }
}
