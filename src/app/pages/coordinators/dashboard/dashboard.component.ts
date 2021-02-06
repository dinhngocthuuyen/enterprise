import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { ContributionsService } from './services/contributions.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  coordinators: any;
  contributions: any;
  settings = {
    columns: {
      _id: {
        title: 'ID',
        type:'string'
      },
      name: {
        title: 'Name',
        type: 'string'

      },
      address: {
        title: 'Address',
        type: 'string'
      },
      phone: {
        title: 'Phone Number',
        type: 'number'
      },
    },
    hideSubHeader: true,
    actions: false
  };
  constructor(
    private route: ActivatedRoute,
    private contributionService: ContributionsService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params);
        this.contributionService.getContributions(params._id).subscribe((contributions: any) => {
          this.contributions = contributions;
        })
      }
    ),
    this.contributionService.getCoordinators().subscribe((coordinators: any) => {
      this.coordinators = coordinators
    })
  }

}
