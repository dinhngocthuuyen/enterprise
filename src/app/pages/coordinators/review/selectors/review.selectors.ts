import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ReviewReducer } from '../reducers';
import { reviewAdapter } from '../reducers/review.reducer';
import { selectReviewState } from './features.selectors';
import * as fromRouter from '@ngrx/router-store'



export const selectReviewEntitiesState = createSelector(
    selectReviewState,
      state => state[ReviewReducer.reviewFeatureKey]
  )
  
  export const {
      selectIds: selectReviewIds,
      selectEntities: selectReviewEntities,
      selectAll: selectAllReviews,
      selectTotal: selectTotalReviews
  } = reviewAdapter.getSelectors(selectReviewEntitiesState);
  
  export const selectCurrentReview = (id) => createSelector(
      selectReviewEntities,
      (reviews) => reviews[id]
  )
  
  export const FacultySelectors = {
      selectReviewEntitiesState,
      selectReviewIds,
      selectReviewEntities,
      selectAllReviews,
      selectTotalReviews,
      selectCurrentReview
  }