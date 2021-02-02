import { Action, combineReducers } from '@ngrx/store';
import * as ProfileReducer from './profile.reducer';
import { ProfileState } from './profile.reducer';

export {
    ProfileReducer,
  }
  
  export const FeatureKey = 'coordinators';
  
  export interface State {
      [ProfileReducer.profileFeatureKey]: ProfileState; 
  }
  
  export function reducer(state: State | undefined, action: Action) {
      return combineReducers({
          [ProfileReducer.profileFeatureKey]: ProfileReducer.reducer,
      })(state, action);
  }
  