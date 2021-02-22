import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {map, mergeMap, catchError, switchMap } from 'rxjs/operators'
import { of, EMPTY as empty  } from 'rxjs'
import { FacultyApiActions, FacultyCollectionApiActions } from '../actions';
import { FacultyService } from '../services/faculty.service'
import { Faculty } from 'src/app/models';
import { FacultyReducer } from '../reducers';

@Injectable()
export class FacultyEffects{
    faculties$ = createEffect(() => this.action$.pipe(
      ofType(FacultyApiActions.getFaculties),
      mergeMap(() => this.FacultyService.getFaculties()
      .pipe(
          map((items: Faculty[]) => FacultyCollectionApiActions.loadFacultySuccess({faculties: items})),
          catchError(error => of(FacultyCollectionApiActions.loadFacultyFailure({ errorMsg: error.message })))
      )
      )
  ));

    faculty$ = createEffect(() => this.action$.pipe(
      ofType(FacultyApiActions.getFaculty),
      mergeMap(() => this.FacultyService.getFaculty()
      .pipe(
          map((item: Faculty) => FacultyCollectionApiActions.loadSelectedFacultySuccess({faculty: item})),
          catchError(error => of(FacultyCollectionApiActions.loadSelectedFacultyFailure({ errorMsg: error.message })))
      )
      )
  ));

    constructor(
        private action$: Actions,
        private FacultyService: FacultyService
    ){}
}
