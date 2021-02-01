import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Contribution } from 'src/app/models';
import { ReviewApiActions } from './actions';
import { ReviewSelectors } from './selectors';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  contributions$: Observable<Contribution[]> | undefined;
  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      date: {
        title: 'Date',
        type: 'date'
      },
      description: {
        title: 'description',
        type: 'string'
      },
    },
    hideSubHeader: true,
    actions: false,
  };

  constructor(
    private store: Store<Contribution>
  ){
    this.contributions$ = this.store.pipe(select(ReviewSelectors.selectAllReviews));

  }
  ngOnInit() {
    this.store.dispatch(ReviewApiActions.loadReviews());
}

}
