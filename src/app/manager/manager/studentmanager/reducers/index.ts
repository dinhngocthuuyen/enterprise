import { Action, combineReducers } from '@ngrx/store';
import * as StudentManagerReducer from './studentmanager.reducer';
import { StudentManagerState } from './studentmanager.reducer';

export {
    StudentManagerReducer,
  }
  
  export const FeatureKey = 'students';
  
  export interface State {
      [StudentManagerReducer.studentmanagerFeatureKey]: StudentManagerState; 
  }
  
  export function reducer(state: State | undefined, action: Action) {
      return combineReducers({
          [StudentManagerReducer.studentmanagerFeatureKey]: StudentManagerReducer.reducer,
      })(state, action);
  }
  