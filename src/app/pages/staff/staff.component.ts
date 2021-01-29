import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StaffApiActions } from './actions';
import { Staff } from './models/staff.model';
import { StaffSelectors } from './selectors/staff.selectors';
import { StaffService } from './services/staff.services';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  staffs$: Observable<Staff[]>;
  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Name',
        type: 'string'
      },
    },
    hideSubHeader: true,
    actions: false,
  };
  constructor(
    private store: Store<Staff>,
    private staffService: StaffService) {
    this.staffs$ = this.store.pipe(select(StaffSelectors.selectAllStaffs));
}

  ngOnInit(): void {
    this.store.dispatch(StaffApiActions.getsStaff({ staffs: [] }));

  }

}
