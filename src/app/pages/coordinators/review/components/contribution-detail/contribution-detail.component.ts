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
  contribution$;
  _id$ !: string;

  @Input() contribution !: Contribution;
  // contribution$;
  // _id$ !: string;
  constructor(
      // private route: Router,
      private router: ActivatedRoute,
      private store: Store<Contribution>,
  ) {
    this._id$ =  this.router.snapshot.params._id;
    this.contribution$ = this.store.pipe(select(ReviewSelectors.selectCurrentReview))
  }

  ngOnInit(): void {
    this.store.dispatch(ReviewApiActions.loadReviews())
  }

}
