import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models';
import { StudentManager } from './actions';
import { StudentManagerSelectors } from './selectors';

@Component({
  selector: 'app-studentmanager',
  templateUrl: './studentmanager.component.html',
  styleUrls: ['./studentmanager.component.scss']
})
export class StudentmanagerComponent implements OnInit {

  students$: Observable<Student[]> ;
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
    },
    hideSubHeader: true,
    actions: false,
  };

  constructor(
    private store: Store<Student>

  ){
    this.students$ = this.store.pipe(select(StudentManagerSelectors.selectAllStudentManager));

  }
  ngOnInit() {
    this.store.dispatch(StudentManager.loadStudentmanagers());
}

}

