import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Contribution } from 'src/app/models';
import { PendingButtonComponent } from '../components/pending-button.component';
import { StatusButtonComponent } from '../components/status-button.component';

@Component({
  selector: "all-tab",
  template: '  <ng2-smart-table [settings]="settings" ></ng2-smart-table>',
})
export class AllComponent implements OnInit {

  // contributions$: Observable<Contribution[]> ;
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

  }
  ngOnInit() {
  }

}
