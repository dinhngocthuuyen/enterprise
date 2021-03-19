import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { NbThemeService } from '@nebular/theme';

import { Contribution, ContributionData } from 'src/app/models';
import { CoorService } from '../services/review.service';
import { Chart } from 'node_modules/chart.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private alive = true;

  contribution: any;
  type = 'week';
  types = ['week', 'month', 'year'];
  conId!: string;
  cons: Contribution[] = [];
  CoorService: any;


  constructor(
    private route: ActivatedRoute,
    private dashboardService: CoorService,
    private contributionService: ContributionData,
  ) { }
  status: any;
  numOfCon: any;

  public pageTitle!: string;
  user: any;
  facId: any;
  faculty: any;
  approveContribution: any;
  // report

  ngOnInit(): void {
    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: ['Jan','Feb', 'Mar', 'Apr','May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Faculty Contributions',
          data: [12, 19, 3, 5, 2, 3, 5, 7, 9, 7, 10, 11],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(90, 99, 132, 0.2)',
            'rgba(23, 100, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(123, 162, 235, 0.2)',
            'rgba(69, 162, 135, 0.2)',
            'rgba(285, 62, 135, 0.2)',
            'rgba(85, 62, 35, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(90, 99, 132, 1)',
            'rgba(23, 100, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(123, 162, 235, 1)',
            'rgba(69, 162, 135, 1)',
            'rgba(285, 62, 135, 1)',
            'rgba(85, 62, 35, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
    
// 
    this.facId = localStorage.getItem('facultyId');

    this.dashboardService.getContributions(this.facId).subscribe((contribution: any) => {
      this.contribution = contribution;
      // this.numOfCon = this.contribution.length
    })
    this.dashboardService.getFaculty(this.facId).subscribe((faculty: any) => {
      this.faculty = faculty
    });

    this.dashboardService.getApprovedCs(this.facId).subscribe((approveContribution: any) => {
      this.approveContribution = approveContribution;
      // this.numOfCon = this.approveContribution.length
      // console.log('abc', this.numOfCon)
    });
  }
  // getContributions(period: string) {
  //   this.dashboardService.getContributions(this.facId).subscribe((contribution: any) => {
  //     this.contribution = contribution;
  //   })
  // }
  val!: number;
  // conY: any;
  @ViewChild("conYear")
  conY!: ElementRef;
  conYear!: number;

  getCons(period: string) {
    this.contributionService.getContributionData(period)
      .pipe(takeWhile(() => this.alive))
      .subscribe(contributionData => {
        this.cons = contributionData;
        // const conYear = document.getElementById('#conYear') as HTMLScriptElement;
        // this.conY = conYear.nodeValue;
        // const date = this.cons.map(i => i.date)
        // console.log("cons date: ", date);
        // console.log("con year: ", this.conYear)
        // for (var val of date) {
        //   this.val = parseInt(val);
        //   console.log(val);
        // }

        this.dashboardService.getYear(this.facId, 2021).subscribe((contribution: any) => {
          this.contribution = contribution;
          this.numOfCon = this.contribution.length;
          // console.log("con year", this.contribution);
          // console.log("number of cons",this.numOfCon)
        });
      });
  }


  ngOnDestroy() {
    this.alive = false;
  }

}
