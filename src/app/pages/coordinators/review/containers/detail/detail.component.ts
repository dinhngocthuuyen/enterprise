import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Contribution } from 'src/app/models';
import { ReviewApiActions } from '../../actions';
import { ReviewSelectors } from '../../selectors/review.selectors';

@Component({
    template: `
        <!-- <contribution-detail [contribution]="contribution$ | async"></contribution-detail> -->
        <h1>Hello Detail</h1>
    `
})

export class DetailComponent implements OnInit {
  contribution$;
  _id$ !: string;

  constructor(
      private router: ActivatedRoute,
      private store: Store<Contribution>,
  ) {
      this._id$ = this.router.snapshot.params._id;
      this.contribution$ = this.store.pipe(select(ReviewSelectors.selectCurrentReview(this._id$)));
  }

  ngOnInit() {
      this.store.dispatch(ReviewApiActions.loadReviews());
  }
}
