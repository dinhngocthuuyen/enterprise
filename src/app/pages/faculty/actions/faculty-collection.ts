import { createAction, props } from '@ngrx/store';
import { Faculty } from 'src/app/models';

/**
 * Load List Faculty
 */
export const loadFacultySuccess = createAction(
    '[ListFaculty/API] Load List Faculty Success',
    props<{ faculties: Faculty[] }>(),
);
export const loadFacultyFailure = createAction(
    '[ListFaculty/API] Load List Faculty Failure',
    props<{ errorMsg: any }>(),
);
/**
 * Load Selected Faculty
 */
export const loadSelectedFacultySuccess = createAction(
    '[ListFaculty/API] Load Selected Faculty Success',
    props<{ faculty: Faculty}>(),
);
export const loadSelectedFacultyFailure = createAction(
    '[ListFaculty/API] Load Selected Faculty Failure',
    props<{ errorMsg: any }>(),
);
