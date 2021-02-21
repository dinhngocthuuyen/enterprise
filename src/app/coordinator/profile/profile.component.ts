import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Coordinator } from 'src/app/models';
import { ProfileApiActions } from './actions';
import { ProfileSelectors } from './selectors';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',

  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  // public editProfileForm: FormGroup;
  @Input()
  coordinator!: Coordinator;
  coordinators$: Observable<Coordinator[]>; 
  dialogRef: any;

  settings = {
    columns: {
      _id: {
        title: 'ID',
        type:'string'
      },
      name: {
        title: 'Name',
        type: 'string'
        
      },
      address: {
        title: 'Address',
        type: 'string'
      },
      phone: {
        title: 'Phone',
        type: 'number'
      },
      dob: {
        title: 'Date',
        type: 'Date'
      },
      email: {
        title: 'Email',
        type: 'email'
      },
    },
    hideSubHeader: true,
    actions: false,
  };

  constructor(
    private store: Store<Coordinator>,
    private router: Router,
    private dialogService: NbDialogService,

  ){
    this.coordinators$ = this.store.pipe(select(ProfileSelectors.selectAllProfiles));

  }
  ngOnInit() {
    this.store.dispatch(ProfileApiActions.loadProfiles());
}
onUserRowSelect(event){
  this.router.navigate(['pages/6027b13aecb2363a9466d4ca/profile/' + event.data._id]);
}

close(){
  this.dialogRef.close();
}

}
