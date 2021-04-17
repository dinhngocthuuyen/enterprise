import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { CoorService } from '../services/review.service';

@Component({
  selector: 'app-review',
   templateUrl: './review.component.html',
})
export class ReviewComponent implements OnInit {
  @Input() users;
  settings = {
    hideSubHeader: true,
    actions: false,
    columns: {
      _userId: {
        title: 'User ID',
      },
      date: {
        title: 'Submit date',
        valuePrepareFunction: (date: any) => {
          return new DatePipe('en-US').transform(date, 'MMMM d, YYYY')}
      },
      status: {
        title: 'Status',
        config: true
      }
    }
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reviewService: CoorService,
  ){}
  facId: any;
  topicId: any;
  contributions: any;
  source!: LocalDataSource;

  pendingC: any;
  pending!: LocalDataSource;
  numOfP: any;

  approvedC: any;
  approved!: LocalDataSource;
  userId: any;
  student: any;
  ngOnInit() {
    /// load all contributions by faculyID
    this.facId = localStorage.getItem('facultyId');
    this.topicId = this.route.snapshot.params.id;
    this.reviewService.getContribution(this.facId, this.topicId).subscribe((contributions: any) => {
      this.contributions = contributions;
      this.source = new LocalDataSource(this.contributions)
    });

    /// load pending contributions by faculyID
    this.reviewService.getPendingCs(this.facId, this.topicId).subscribe((contributions: any) => {
      this.contributions = contributions;
      this.pending = new LocalDataSource(this.contributions);
      this.numOfP = this.contributions.length;
    });
    /// load approved contributions by faculyID
    this.reviewService.getApprovedCs(this.facId, this.topicId).subscribe((contributions: any) => {
      this.contributions = contributions;
      this.approved = new LocalDataSource(this.contributions)
    });
    //// load user id
    this.userId = localStorage.getItem('userId');
  }

  navigateToDetail(event) {
    this.router.navigate(['coordinator/' + this.userId + '/review/' + event.data._id])
  }
}
