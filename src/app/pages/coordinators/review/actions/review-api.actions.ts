import { createAction, props } from '@ngrx/store';
import { Contribution, Faculty } from 'src/app/models';

export const loadReviews = createAction(
    '[Review] Loads Contribution',

  );

  export const loadReview = createAction(
    '[Review] Load Contributions',
     props< {contribution: Contribution}>(),
  );
