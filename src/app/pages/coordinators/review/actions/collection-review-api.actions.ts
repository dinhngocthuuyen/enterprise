import { createAction, props } from '@ngrx/store';
import { Contribution } from 'src/app/models';



export const loadReviewsSuccess = createAction(
  '[Review] Load Reviews Success',
  props<{ contributions: Contribution[] }>()
);

export const loadReviewsFailure = createAction(
  '[Review] Load Reviews Failure',
  props<{ errorMsg: any }>()
);
