import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Coordinator } from 'src/app/models';
import { ProfileApiActions } from '../../actions';
import { ProfileSelectors } from '../../selectors/profile.selectors';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  @Input()
  coordinator!: Coordinator ;
  public editProfileForm!: FormGroup;
  @Output() response: EventEmitter<any> = new EventEmitter();
  // public coordinator!: Coordinator;
    constructor(
      private fb: FormBuilder,
      private store: Store<Coordinator>,
      private route: Router,
      // protected dialogRef: NbDialogRef<ProfileEditComponent>
    ) { }
 
    ngOnInit() {
      this.createForm();
  }

  createForm = () => {
      this.editProfileForm = this.fb.group({
          name: [this.coordinator ? this.coordinator.name : '', Validators.required],
          address: [this.coordinator ? this.coordinator.address : '', Validators.required],
          email: [this.coordinator ? this.coordinator.email : '', Validators.required],
          dob: [this.coordinator ? this.coordinator.dob : '', Validators.required],
          phone: [this.coordinator ? this.coordinator.phone : '', Validators.required],
          _id: [this.coordinator ? this.coordinator._id : '', Validators.required],
      })
  }

  close() {
    // this.close();
}

  onSubmit(item) {
      if (item.name !== '' &&
          item.address !== '' &&
          item.email !== '' &&
          item.dob !== '' &&
          item.phone !== '' &&
          item._id !== '' ) {
          if (item._id != '') {
              const update = {
                  id: item._id,
                  changes: item
              }
              this.store.dispatch(ProfileApiActions.updateProfiles({ update: update }));

          }
      }
      this.close();
  }
  back(){
    this.route.navigate(['pages/coordinators/profile']);
  }
  }