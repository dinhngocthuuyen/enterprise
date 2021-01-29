import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {map, mergeMap, catchError, switchMap } from 'rxjs/operators'
import { of, EMPTY as empty  } from 'rxjs'
import { CollectionStaffApiActions, StaffApiActions } from "../actions";
import { Staff } from "../models/staff.model";
import { StaffService } from "../services/staff.services";

@Injectable()
export class StaffEffects{
    staffs$ = createEffect(() => this.action$.pipe(
        ofType(StaffApiActions.getsStaff),
        mergeMap(() => this.staffService.getStaffs()
        .pipe(
            map((items: Staff[]) => CollectionStaffApiActions.getsStaffSuccess({staffs: items})),
            catchError(error => of(CollectionStaffApiActions.getsStaffFailure({ errorMsg: error.message })))
        )
        )
    ));
    constructor(
        private action$: Actions,
        private staffService: StaffService
    ){}
}