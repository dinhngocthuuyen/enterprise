import { createAction, props } from '@ngrx/store';
import { Coordinator } from 'src/app/models';


/////LOAD ALL/////
export const loadProfilesSuccess = createAction(
  '[Profile] Load Profiles Success',
  props<{ coordinators: Coordinator[] }>()
);

export const loadProfilesFailure = createAction(
  '[Profile] Load Profiles Failure',
  props<{ errorMsg: any }>()
);
////LOAD SELLECTED////

export const loadProfileSuccess = createAction(
  '[Profile] Load Profile Success',
  props<{ coordinator: Coordinator }>()
);

export const loadProfileFailure = createAction(
  '[Profile] Load Profile Failure',
  props<{ errorMsg: any }>()
);
////UPDATE PROFILE/////
export const updateProfilesSuccess = createAction(
  '[Collection-Profiles/API] update Profiles success',
  // props<{  structured: Structure }>(),
);

export const updateProfilesFailure = createAction(
  '[Collection-Profiles/API] update Profiles failure',
  props<{ errorMsg: any }>(),
);