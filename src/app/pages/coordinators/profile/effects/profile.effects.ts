import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Coordinator } from 'src/app/models';
import { ProfileApiActions, ProfileCollectionApiActions } from '../actions';
import { ProfileService } from '../services/profile.service';



@Injectable()
export class ProfileEffects {
  profiles$ = createEffect(() => this.actions$.pipe(
    ofType(ProfileApiActions.loadProfiles),
    mergeMap(() => this.ProfileServices.getProfiles()
    .pipe(
        map((items: Coordinator[]) => ProfileCollectionApiActions.loadProfilesSuccess({coordinators: items})),
        catchError(error => of(ProfileCollectionApiActions.loadProfilesFailure({ errorMsg: error.message })))
    )
    )
));


  constructor(
    private actions$: Actions,
    private ProfileServices: ProfileService

    ) {}

}
