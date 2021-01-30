import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Faculty } from 'src/app/models';
import { FacultyApiActions } from '../actions';
import { FacultySelectors } from '../selectors';
import { decrement, increment, reset } from '../state/counter.actions';

@Component({
  selector: 'faculty-list',
  template: `
            <ng2-smart-table [settings]="settings" [source]="faculties$ | async">
        </ng2-smart-table>
  `,
})

  export class FacultyListComponent implements OnInit{
    faculties$: Observable<Faculty[]>;
    settings = {
      columns: {
        id: {
          title: 'ID',
          type: 'number'
        },
        name: {
          title: 'Name',
          type: 'string'
        },
      },
      hideSubHeader: true,
      actions: false,
    };

    constructor(
      private store: Store<Faculty>
    ){
      this.faculties$ = this.store.pipe(select(FacultySelectors.selectAllFaculties));

    }
    ngOnInit() {
      this.store.dispatch(FacultyApiActions.getFaculties());
  }
  }
