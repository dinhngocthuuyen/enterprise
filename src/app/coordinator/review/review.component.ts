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
      file: {
        title: 'File',
      },
      date: {
        title: 'Date',
      },
      status: {
        title: 'Status',
      }
    }
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reviewService: CoorService,
  ){

  }
  facultyId = "60335cd8418c2621094f021e";
  contributions: any;
  source!: LocalDataSource;
  currentUser: any;
  userId!: string;
  ngOnInit() {
    // this.userId = this.route.snapshot.params.id;
    // console.log("coor id " + this.userId);
    this.reviewService.getContributions(this.facultyId).subscribe((contributions: any) => {
      this.contributions = contributions;
      this.source = new LocalDataSource(this.contributions)
    });
    this.reviewService.getUsers().subscribe((users: any) =>{
      this.users = users;
    })
  }

  navigateToDetail(event) {
    this.router.navigate(['coordinator/6033627369441323b60eb900/review/' + event.data._id])
  }

}
