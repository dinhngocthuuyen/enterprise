import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { DashboardService } from './services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() user;
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
    private dashboardService: DashboardService,
    ) { }
  facultyId = "60335cd8418c2621094f021e";
  contributions: any;
  id= "aaa";
  source!: LocalDataSource;

  ngOnInit() {
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     console.log(params);
    //     this.dashboardService.getUser(params.id).subscribe((user: any) => {
    //       console.log(user);
    //       this.user = user;
    //     })
    //   }
    // )
    this.dashboardService.getContributions(this.facultyId).subscribe((contributions: any) => {
      this.contributions = contributions;
      this.source = new LocalDataSource(this.contributions)
    })
    // this.dashboardService.getUser(this.id).subscribe((contributions: any) => {
    //   console.log("Contributions: "+ contributions),
    //   this.contributions = contributions
    // }),
  }
}
