import { createAction, props } from '@ngrx/store';
import { Coordinator } from 'src/app/models';



export const loadProfilesSuccess = createAction(
  '[Profile] Load Profiles Success',
  props<{ coordinators: Coordinator[] }>()
);

export const loadProfilesFailure = createAction(
  '[Profile] Load Profiles Failure',
  props<{ errorMsg: any }>()
);
