import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ContributionsService } from './services/contributions.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  coordinators!: any;
  contributions!: any;
  count: any;
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
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     console.log(params);
    //     this.contributionService.getContributions(params.coordinatorId).subscribe((contributions: any) => {
    //       this.contributions = contributions;
    //     })
    //   }
    // ),
    this.contributionService.getCoordinators().subscribe((coordinators: any) => {
      this.coordinators = coordinators
    })
    // this.contributionService.getTotalContribution().subscribe((count: any) => {
    //   this.count = count
    // })
  }

}
