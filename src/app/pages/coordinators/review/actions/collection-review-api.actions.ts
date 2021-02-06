import { createAction, props } from '@ngrx/store';
import { Contribution } from 'src/app/models';


/**
 * Load List Contributions
 */
export const loadReviewsSuccess = createAction(
  '[Review] Load All Contributions Success',
  props<{ contributions: Contribution[] }>()
);

export const loadReviewsFailure = createAction(
  '[Review] Load All Contributions Failure',
  props<{ errorMsg: any }>()
);

/**
 * Load Selected Faculty
 */
export const loadSelectedContributionSuccess = createAction(
  '[Review/Contribution] Load Selected Contribution Success',
  props<{ contribution: Contribution}>(),
);
export const loadSelectedContributionFailure = createAction(
  '[Review/Contribution] Load Selected Contribution Failure',
  props<{ errorMsg: any }>(),
);


export const loadPendingsSuccess = createAction(
  '[Review] Load pending Reviews Success',
  props<{ contributions: Contribution[] }>()
);

export const loadPendingFailure = createAction(
  '[Review] Load pending Reviews Failure',
  props<{ errorMsg: any }>()
);
