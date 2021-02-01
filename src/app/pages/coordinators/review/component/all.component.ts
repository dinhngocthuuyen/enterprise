import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Contribution } from 'src/app/models';
import { ReviewApiActions } from '../actions';
import { ReviewSelectors } from '../selectors';

@Component({
  selector: "all-tab",
  template: '  <ng2-smart-table [settings]="settings" [source]="contributions$ | async"></ng2-smart-table>',
})
export class AllComponent implements OnInit {

  contributions$: Observable<Contribution[]> ;
  settings = {
    columns: {
      _id: {
        title: 'ID',
        type:'string'
      },
      date: {
        title: 'Date',
        type: 'date'
        
      },
      description: {
        title: 'description',
        type: 'string'
      },
      pending: {
        title: 'Pending',
        type: 'boolean'
      },
      status: {
        title: 'Status',
        type: 'boolean'
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
