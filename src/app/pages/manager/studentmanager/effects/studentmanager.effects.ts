import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Student } from 'src/app/models';
import { StudentManager, StudentManagerCollectionApiActions } from '../actions';
import { StudentManagerService } from '../services/studentmanager.service';



@Injectable()
export class StudentManageEffects {

  reviews$ = createEffect(() => this.action$.pipe(
    ofType(StudentManager.loadStudentmanagers),
    mergeMap(() => this.StudentManagerServices.getStudentManagers()
    .pipe(
        map((items: Student[]) => StudentManagerCollectionApiActions.loadStudentmanagersSuccess({students: items})),
        catchError(error => of(StudentManagerCollectionApiActions.loadStudentmanagersFailure({ errorMsg: error.message })))
    )
    )
));
constructor(
  private action$: Actions,
  private StudentManagerServices: StudentManagerService
){}
}