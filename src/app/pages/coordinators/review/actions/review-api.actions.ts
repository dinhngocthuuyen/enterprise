import { createAction, props } from '@ngrx/store';
import { Faculty } from 'src/app/models';

export const loadReviews = createAction(
    '[Review] Load Reviews',

  );

export const getFaculty = createAction(
  '[Faculty/API] Get Selected Faculty',
  props<{ faculty: Faculty }>(),
);
