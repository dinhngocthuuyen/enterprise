import { createAction, props } from '@ngrx/store';
import { Admin } from 'src/app/models';

export const getFaculties = createAction(
  '[Admin/API] Get List Admin',
  // props<{ faculties: Faculty[] }>(),
);

export const getFaculty = createAction(
  '[Admin/API] Get Selected Admin',
  props<{ admin: Admin }>(),
);
