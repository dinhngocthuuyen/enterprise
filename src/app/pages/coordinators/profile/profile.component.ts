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
    private store: Store<Coordinator>

  ){
    this.coordinators$ = this.store.pipe(select(ProfileSelectors.selectAllProfiles));

  }
  ngOnInit() {
    this.store.dispatch(ProfileApiActions.loadProfiles());
}

}
