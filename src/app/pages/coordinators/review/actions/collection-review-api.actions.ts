import { createAction, props } from '@ngrx/store';



export const loadReviewsSuccess = createAction(
  '[Review] Load Reviews Success',
  props<{ data: any }>()
);

export const loadReviewsFailure = createAction(
  '[Review] Load Reviews Failure',
  props<{ error: any }>()
);
