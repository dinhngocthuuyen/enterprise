import { createAction, props } from '@ngrx/store';
import { Admin } from 'src/app/models';

/**
 * Load List Admin
 */
export const loadAdminSuccess = createAction(
    '[ListAdmin/API] Load List Admin Success',
    props<{ admins: Admin[] }>(),
);
export const loadAdminFailure = createAction(
    '[ListAdmin/API] Load List Admin Failure',
    props<{ errorMsg: any }>(),
);
/**
 * Load Selected Admin
 */
export const loadSelectedAdminSuccess = createAction(
    '[ListAdmin/API] Load Selected Admin Success',
    props<{ admin: Admin}>(),
);
export const loadSelectedAdminFailure = createAction(
    '[ListAdmin/API] Load Selected Admin Failure',
    props<{ errorMsg: any }>(),
);
