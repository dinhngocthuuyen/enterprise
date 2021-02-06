import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Contribution } from 'src/app/models';
import { ReviewApiActions } from '../actions';
import { PendingButtonComponent } from '../components/pending-button.component';
import { StatusButtonComponent } from '../components/status-button.component';
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
        type: 'custom',
        renderComponent: PendingButtonComponent
      },
      status: {
        title: 'Status',
        type: 'custom',
        renderComponent: StatusButtonComponent
      }
    },
    hideSubHeader: true,
    actions: false
  };

  constructor(
    private store: Store<Contribution>,
    private router: Router,
  ){
    this.contributions$ = this.store.pipe(select(ReviewSelectors.selectAllReviews));

  }
  ngOnInit() {
    this.store.dispatch(ReviewApiActions.loadReviews());
  }

  onUserRowSelect(event){
    this.router.navigate(['pages/coordinators/review', event.data._id])
    alert("youre moving to " + event.data._id )
  }
}
