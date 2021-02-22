import { createAction, props } from '@ngrx/store';
import { Contribution, Faculty } from 'src/app/models';

export const loadReviews = createAction(
    '[Review] Load All Contributions',
    // props< {contributions: Contribution[]}>(),

  );

export const loadReview = createAction(
  '[Review] Load Selected Contribution',
    props< {contribution: Contribution}>(),
);

export const loadPendings = createAction(
  '[Review] Loads pending Contribution',

);
