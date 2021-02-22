import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Contribution } from 'src/app/models';
import { ReviewApiActions } from '../../actions';
import { ReviewSelectors } from '../../selectors';

@Component({
  selector: 'contribution-detail',
  templateUrl: './contribution-detail.component.html',
})
export class ContributionDetailComponent implements OnInit {
  @Input() contribution!: Contribution;
  contribution$;
  _id$ !: string;
  constructor(
      // private route: Router,
      private route: ActivatedRoute,
      private store: Store<Contribution>,
  ) {
    this._id$ =  this.route.snapshot.params._id;
    this.contribution$ = this.store.pipe(select(ReviewSelectors.selectCurrentReview))
  }

  ngOnInit() {
    this.store.dispatch(ReviewApiActions.loadReviews())
  }

}
