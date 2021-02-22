import { createAction, props } from '@ngrx/store';
import { Student } from 'src/app/models';



export const loadStudentmanagersSuccess = createAction(
  '[Studentmanager] Load Studentmanagers Success',
  props<{ students : Student[] }>()
);

export const loadStudentmanagersFailure = createAction(
  '[Studentmanager] Load Studentmanagers Failure',
  props<{ errorMsg: any }>()
);
