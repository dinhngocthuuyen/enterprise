import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Coordinator } from 'src/app/models';
import { ProfileApiActions } from '../../actions';
import { ProfileSelectors } from '../../selectors/profile.selectors';
import { ProfileAddComponent } from '../profile-add/profile-add.component';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  @Input()
  coordinator!: Coordinator ;
    constructor(
      private route: Router,
      private dialogService: NbDialogService,
    ) { }
    ngOnInit() {
    }
  
    back(){
      this.route.navigate(['pages/coordinators/profile']);
    }
  
   edit():void{
      this.dialogService.open(ProfileAddComponent, {
        context: {
          coordinator: this.coordinator
        }
      })
    }
    
  }