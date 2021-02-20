import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { select, Store } from '@ngrx/store';
import { Coordinator } from 'src/app/models';
import { ProfileApiActions } from '../../actions';
import { ProfileSelectors } from '../../selectors/profile.selectors';
import { ProfileEditComponent } from '../profile-edit/profile-edit.component';

@Component({
  selector: 'app-profile-detail-update',
  templateUrl: './profile-detail-update.component.html',
  styleUrls: ['./profile-detail-update.component.scss']
})
export class ProfileDetailUpdateComponent implements OnInit {
  @Input()
  coordinator!: Coordinator ;
  coordinator$;
  // id$: String;
  constructor(
    private router: ActivatedRoute,
    private store: Store<Coordinator>,
    private dialogService: NbDialogService,
  ) { 
    // this.id$ =  ;
    this.coordinator$ = this.store.pipe(select(ProfileSelectors.selectCurrentProfile(this.router.snapshot.params.id)));
  }

  ngOnInit() {
    this.store.dispatch(ProfileApiActions.loadProfiles());
}



edit(){
  this.dialogService.open(ProfileEditComponent, {
    context: {
      coordinator: this.coordinator
    }
  })
}
  // back(){
  //   this.route.navigate(['pages/coordinators/profile']);
  // }

}
