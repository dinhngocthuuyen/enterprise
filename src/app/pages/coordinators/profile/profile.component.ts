import { Component, OnInit } from '@angular/core';
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
<<<<<<< Updated upstream:src/app/pages/coordinators/profile/profile.component.ts
=======
  // public editProfileForm: FormGroup;
  @Input()
  coordinator!: Coordinator;
  coordinators$: Observable<Coordinator[]>;
  dialogRef: any;
>>>>>>> Stashed changes:src/app/coordinator/profile/profile.component.ts

  coordinators$: Observable<Coordinator[]> ;
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
        type: 'string'
      },
      email: {
        title: 'Email',
        type: 'string'
      },
    },
    hideSubHeader: true,
    actions: false,
  };

  constructor(
    private store: Store<Coordinator>

  ){
    this.coordinators$ = this.store.pipe(select(ProfileSelectors.selectAllProfiles));

  }
  ngOnInit() {
    this.store.dispatch(ProfileApiActions.loadProfiles());
}
<<<<<<< Updated upstream:src/app/pages/coordinators/profile/profile.component.ts
=======
onUserRowSelect(event){
  this.router.navigate(['pages/profile/' + event.data._id]);
}

close(){
  this.dialogRef.close();
}
>>>>>>> Stashed changes:src/app/coordinator/profile/profile.component.ts

}
