import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Coordinator } from 'src/app/models';
import { ProfileApiActions } from '../../actions';
import { ProfileSelectors } from '../../selectors';

@Component({
  selector: 'app-profile-add',
  templateUrl: './profile-add.component.html',
  styleUrls: ['./profile-add.component.scss']
})
export class ProfileAddComponent implements OnInit {

  public editProfileForm!: FormGroup;
  @Output() response: EventEmitter<any> = new EventEmitter();
  public coordinator!: Coordinator;
 
  constructor(
      // private dialogRef: NbDialogRef<ApplyForHeaderEditComponent>,
      private fb: FormBuilder,
      private store: Store<Coordinator>,
      protected dialogRef: NbDialogRef<ProfileAddComponent>

  ) {
      // this.coordinators$ = this.store.pipe(select(ProfileSelectors.selectAllProfiles));
  }

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
    this.dialogRef.close();
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
                  id: item.id,
                  changes: item
              }
              this.store.dispatch(ProfileApiActions.updateProfiles({ update: update }));

          }
      }
      this.close();
  }

}
