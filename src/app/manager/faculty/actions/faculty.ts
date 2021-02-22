import { createAction, props } from '@ngrx/store';
import { Faculty } from 'src/app/models';

export const getFaculties = createAction(
  '[Faculty/API] Get List Faculty',
  // props<{ faculties: Faculty[] }>(),
);

export const getFaculty = createAction(
  '[Faculty/API] Get Selected Faculty',
  props<{ faculty: Faculty }>(),
);
