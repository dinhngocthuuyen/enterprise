import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Contribution } from 'src/app/models';
import { ReviewApiActions } from '../actions';
import { ReviewSelectors } from '../selectors';

@Component({
  selector: "all-tab",
  template: '  <ng2-smart-table [settings]="settings" [source]="contributions$ | async" (userRowSelect)="onUserRowSelect($event)"></ng2-smart-table>',
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
    actions: false
  };

  constructor(
    private store: Store<Contribution>,
    private route: Router,
  ){
    this.contributions$ = this.store.pipe(select(ReviewSelectors.selectAllReviews));

  }
  ngOnInit() {
    this.store.dispatch(ReviewApiActions.loadReviews());
  }

  onUserRowSelect(event){
    this.route.navigate(['pages/coordinators/review', event.data._id])
    alert("youre moving to " + event.data._id )
  }
}
