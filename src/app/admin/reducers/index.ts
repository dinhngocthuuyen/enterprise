import { Action, combineReducers } from '@ngrx/store';
import * as AdminReducer from './admin.reducers';
import { AdminState } from './admin.reducers';

export {
    AdminReducer,
  }
  
  export const FeatureKey = 'students';
  
  export interface State {
      [AdminReducer.adminFeatureKey]: AdminState; 
  }
  
  export function reducer(state: State | undefined, action: Action) {
      return combineReducers({
          [AdminReducer.adminFeatureKey]: AdminReducer.reducer,
      })(state, action);
  }
  