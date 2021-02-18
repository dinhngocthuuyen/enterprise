import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { select, Store } from '@ngrx/store';
import { Coordinator } from 'src/app/models';
import { ProfileApiActions } from '../../actions';
import { ProfileSelectors } from '../../selectors/profile.selectors';

@Component({
  selector: 'app-profile-detail-update',
  templateUrl: './profile-detail-update.component.html',
  styleUrls: ['./profile-detail-update.component.scss']
})
export class ProfileDetailUpdateComponent implements OnInit {
  // @Input()
  // coordinators!: Coordinator;

  coordinators$;
  _id$;
  constructor(
    private router: ActivatedRoute,
    private store: Store<Coordinator>
  ) { 
    this._id$ =  +this.router.snapshot.params.id;
    this.coordinators$ = this.store.pipe(select(ProfileSelectors.selectCurrentProfile(this._id$)));
  }

  ngOnInit() {
    this.store.dispatch(ProfileApiActions.loadProfiles());
}

  // back(){
  //   this.route.navigate(['pages/coordinators/profile']);
  // }

}
