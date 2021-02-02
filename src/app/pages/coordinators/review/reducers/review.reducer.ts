import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Contribution } from 'src/app/models';
import { ReviewApiActions, ReviewCollectionApiActions } from '../actions';

export interface ReviewState extends EntityState<Contribution>{
  selectedReviewID: String | null;
}

export const reviewAdapter: EntityAdapter<Contribution> = createEntityAdapter<Contribution>({
  selectId: (contribution: Contribution) => contribution._id,
  sortComparer: false,
});

export const reviewInitialState: ReviewState = reviewAdapter.getInitialState({
  selectedReviewID: null,
  entities: {
      0: {
          _id: '',
          description:'',
          date: '',
        }
  }
})

export const reviewFeatureKey = 'contributions';



export const reducer = createReducer(
  reviewInitialState,
  on(
    ReviewCollectionApiActions.loadReviewsSuccess,
      (state, { contributions }) => {
        contributions = contributions

        return reviewAdapter.addMany(
          contributions,
            state)
      }
  ),
  on(
    ReviewCollectionApiActions.loadPendingsSuccess,
      (state, { contributions }) => {
        contributions = contributions

        return reviewAdapter.addMany(
          contributions,
            state)
      }
  ),

);

