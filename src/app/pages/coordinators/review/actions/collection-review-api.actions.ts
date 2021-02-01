import { createAction, props } from '@ngrx/store';
import { Contribution } from 'src/app/models';



export const loadReviewsSuccess = createAction(
  '[Review] Load All Reviews Success',
  props<{ contributions: Contribution[] }>()
);

export const loadReviewsFailure = createAction(
  '[Review] Load All Reviews Failure',
  props<{ errorMsg: any }>()
);


export const loadPendingsSuccess = createAction(
  '[Review] Load pending Reviews Success',
  props<{ contributions: Contribution[] }>()
);

export const loadPendingFailure = createAction(
  '[Review] Load pending Reviews Failure',
  props<{ errorMsg: any }>()
);
