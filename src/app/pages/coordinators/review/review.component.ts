import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contribution } from 'src/app/models';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  combutritions$: Observable<Contribution[]> | undefined;
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

  ngOnInit(): void {
  }

}
