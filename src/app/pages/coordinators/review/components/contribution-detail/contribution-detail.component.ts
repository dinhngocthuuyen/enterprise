import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'contribution-detail',
  templateUrl: './contribution-detail.component.html',
})
export class ContributionDetailComponent implements OnInit {
  constructor(
      // private route: Router,
      private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
  }

}
