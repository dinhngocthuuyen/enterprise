import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { CoorService } from '../../services/review.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  changePasswordForm = new FormGroup({
    password: new FormControl(''),
    // newpassword: new FormControl(''),
  
  })
  userId:any;
  user: any[]=[];
  constructor(
    private store: Store<User>,
    private router: Router,
    private route: ActivatedRoute,
    private profileService: CoorService,

    ) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    this.profileService.getProfile(this.userId).subscribe((user: any) => {
      this.user = user;
    });
  }
  changePassword(){
    this.profileService.changePassword(this.userId,this.changePasswordForm.value).subscribe((result)=>
    console.log(result,"password update success")
    )
    
    // this.router.navigate(['coordinator/'+this.userId +'/profile'])
  }
}
