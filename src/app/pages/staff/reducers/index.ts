import { Action, combineReducers } from '@ngrx/store';
import { StaffState } from '../state';
import * as StaffReducer from './staff.reducer';

export {
    StaffReducer,
}

export const FeatureKey = 'staffs';

export interface State {
    [StaffReducer.StaffFeatureKey]: StaffState;
}

export function reducer(state: State | undefined, action: Action) {
    return combineReducers({
        [StaffReducer.StaffFeatureKey]: StaffReducer.reducer
    })(state, action);
}
