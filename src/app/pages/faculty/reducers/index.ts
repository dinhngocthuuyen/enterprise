import * as FacultyReducer from './faculty.reducers';
import { Action, combineReducers } from '@ngrx/store';

export {
  FacultyReducer,
}

export const FeatureKey = 'faculties';

export interface State {
    [FacultyReducer.facultiesFeatureKey]: FacultyReducer.FacultyState; // luu y
}

export function reducer(state: State | undefined, action: Action) {
    return combineReducers({
        [FacultyReducer.facultiesFeatureKey]: FacultyReducer.reducer,
    })(state, action);
}
