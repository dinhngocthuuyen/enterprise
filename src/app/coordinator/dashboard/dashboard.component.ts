import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DashboardService } from './services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() user;
  constructor(
    private route: ActivatedRoute,
    private dashboardService: DashboardService,
    ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params);
        this.dashboardService.getUser(params.id).subscribe((user: any) => {
          console.log(user);
          this.user = user;
        })
      }
    )
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     console.log(params);
    //     this.contributionService.getContributions(params.coordinatorId).subscribe((contributions: any) => {
    //       this.contributions = contributions;
    //     })
    //   }
    // ),
    // this.contributionService.getCoordinators().subscribe((coordinators: any) => {
    //   this.coordinators = coordinators
    // })
    // this.contributionService.getTotalContribution().subscribe((count: any) => {
    //   this.count = count
    // })
  }
}
