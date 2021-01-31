import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { select } from '@ngrx/store';
import { Faculty } from 'src/app/models';
import { FacultyApiActions } from './actions';
import { FacultySelectors } from './selectors/faculty.selectors';
import { decrement, increment, reset } from './state/counter.actions';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})

  export class FacultyComponent implements OnInit{
    faculties$: Observable<Faculty[]> | undefined;
    settings = {
      columns: {
        id: {
          title: 'ID'
        },
        name: {
          title: 'Name',
          type: 'string'
        },
      },
      hideSubHeader: true,
      actions: false,
    };
    enteredValue =  '';
    newPost = 'No Content';
    // onAddPost(postInput: HTMLTextAreaElement){
    //   // console.dir(postInput)
    //   // this.newPost= 'Hello!';

    //   // this.newPost= postInput.value;
    //   this.newPost = this.enteredValue;
    // }
    onAddPost(){
      this.newPost = this.enteredValue;
    }

    count2$: Observable<number>;

    constructor(private store: Store<{ count2: number }>) {
      this.count2$ = store.select('count2');
    }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

    increment() {
      this.store.dispatch(increment());
    }

    decrement() {
      this.store.dispatch(decrement());
    }

    reset() {
      this.store.dispatch(reset());
    }


  
  }
