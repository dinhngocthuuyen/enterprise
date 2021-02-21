import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Contribution } from 'src/app/models';
import { ReviewApiActions } from './actions';
import { ReviewSelectors } from './selectors';

@Component({
  selector: 'app-review',
   templateUrl: './review.component.html',
})
export class ReviewComponent implements OnInit {


  constructor(

  ){

  }
  ngOnInit() {
}

}
