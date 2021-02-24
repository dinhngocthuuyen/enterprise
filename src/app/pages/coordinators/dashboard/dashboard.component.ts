import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
<<<<<<< Updated upstream:src/app/pages/coordinators/dashboard/dashboard.component.ts
import { LocalDataSource } from 'ng2-smart-table';
import { ContributionsService } from './services/contributions.service';
=======
>>>>>>> Stashed changes:src/app/coordinator/dashboard/dashboard.component.ts

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
<<<<<<< Updated upstream:src/app/pages/coordinators/dashboard/dashboard.component.ts
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
=======
>>>>>>> Stashed changes:src/app/coordinator/dashboard/dashboard.component.ts

  constructor(
    private route: ActivatedRoute,
<<<<<<< Updated upstream:src/app/pages/coordinators/dashboard/dashboard.component.ts
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
=======
    ) {
    }
  public pageTitle!: string;
  user: any;
  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.user = data,
      console.log("user " + this.user.role)
>>>>>>> Stashed changes:src/app/coordinator/dashboard/dashboard.component.ts
    })
  }
}
