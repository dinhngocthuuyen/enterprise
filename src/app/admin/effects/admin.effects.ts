import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Admin } from 'src/app/models';
import { AdminApiActions, AdminCollectionApiActions } from '../actions';
import { AdminService } from '../services/admin.service';



@Injectable()
export class AdminEffects {

  admin$ = createEffect(() => this.action$.pipe(
    ofType(AdminApiActions.getAdmin),
    mergeMap(() => this.AdminServices.getAdmins()
    .pipe(
        map((items: Admin[]) => AdminCollectionApiActions.loadAdminSuccess({admins: items})),
        catchError(error => of(AdminCollectionApiActions.loadAdminFailure({ errorMsg: error.message })))
    )
    )
));
constructor(
  private action$: Actions,
  private AdminServices: AdminService
){}
}