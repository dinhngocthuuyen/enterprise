import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { Coordinator } from 'src/app/models';
import { ProfileApiActions, ProfileCollectionApiActions } from '../actions';
import { ProfileService } from '../services/profile.service';
import {WebRequestService} from 'src/app/shared/web-request.service'


@Injectable()
export class ProfileEffects {
  coordinators$ = createEffect(() => this.actions$.pipe(
    ofType(ProfileApiActions.loadProfiles),
    mergeMap(() => this.ProfileServices.getProfiles()
    .pipe(
        map((items: Coordinator[]) => ProfileCollectionApiActions.loadProfilesSuccess({coordinators: items})),
        catchError(error => of(ProfileCollectionApiActions.loadProfilesFailure({ errorMsg: error.message })))
    )
    )
));
// coordinator$ = createEffect(() => this.actions$.pipe(
//   ofType(ProfileApiActions.loadProfile),
//   mergeMap(() => this.ProfileServices.getProfile()
//   .pipe(
//       map((item: Coordinator) => ProfileCollectionApiActions.loadProfileSuccess({coordinator: item})),
//       catchError(error => of(ProfileCollectionApiActions.loadProfileFailure({ errorMsg: error.message })))
//   )
//   )
// ));
edit$ = createEffect(() => this.actions$.pipe(
  ofType(ProfileApiActions.updateProfiles),
  switchMap(({update}) =>
  this.ProfileServices.updateProfiles(update.changes).pipe(
      map(item => ProfileCollectionApiActions.updateProfilesSuccess(
          ) ),
      catchError(error => of(ProfileCollectionApiActions.updateProfilesFailure({errorMsg:error.message})))
  ))
));
  constructor(
    private actions$: Actions,
    private ProfileServices: ProfileService,
    private WebRequestService: WebRequestService
    ) {}

}
