import { Action, combineReducers } from '@ngrx/store';
import * as ReviewReducer from './review.reducer';
import { ReviewState } from './review.reducer';

export {
    ReviewReducer,
  }
  
  export const FeatureKey = 'contributions';
  
  export interface State {
      [ReviewReducer.reviewFeatureKey]: ReviewState; // luu y
  }
  
  export function reducer(state: State | undefined, action: Action) {
      return combineReducers({
          [ReviewReducer.reviewFeatureKey]: ReviewReducer.reducer,
      })(state, action);
  }
  