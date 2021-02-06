import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {map, mergeMap, catchError, switchMap } from 'rxjs/operators'
import { of, EMPTY as empty  } from 'rxjs'
import { Contribution } from 'src/app/models';
import { ReviewApiActions, ReviewCollectionApiActions } from '../actions';
import { ReviewService } from '../services/review.service';



@Injectable()
export class ReviewEffects {

  reviews$ = createEffect(() => this.action$.pipe(
    ofType(ReviewApiActions.loadReviews),
    mergeMap(() => this.ReviewServices.getReviews()
    .pipe(
        map((items: Contribution[]) => ReviewCollectionApiActions.loadReviewsSuccess({contributions: items})),
        catchError(error => of(ReviewCollectionApiActions.loadReviewsFailure({ errorMsg: error.message })))
    )
    )
));
  contribution$ = createEffect(() => this.action$.pipe(
    ofType(ReviewApiActions.loadReview),
    mergeMap(() => this.ReviewServices.getReview()
    .pipe(
        map((item: Contribution) => ReviewCollectionApiActions.loadSelectedContributionSuccess({contribution: item})),
        catchError(error => of(ReviewCollectionApiActions.loadSelectedContributionFailure({ errorMsg: error.message })))
    )
    )
  ));


  constructor(
      private action$: Actions,
      private ReviewServices: ReviewService
  ){}
}
