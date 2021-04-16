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
  topicId: any;
  consbyMonth!: number;
  months = [1,2,3,4, 5, 6, 7, 8,9,10,11,12];
  monthValue: any[] =[];
  vals = [];
  i!: number;
  length!: number;
  ngOnInit(): void {
    this.facId = localStorage.getItem('facultyId');
    this.topicId = this.route.snapshot.params.id;
    this.dashboardService.getContributions(this.facId).subscribe((contribution: any) => {
      this.contribution = contribution;
      // this.numOfCon = this.contribution.length
    })
    this.dashboardService.getFaculty(this.facId).subscribe((faculty: any) => {
      this.faculty = faculty
    });

    this.dashboardService.getApprovedCs(this.facId, this.topicId).subscribe((approveContribution: any) => {
      this.approveContribution = approveContribution;
      // this.numOfCon = this.approveContribution.length
      // console.log('abc', this.numOfCon)
    });

    for (this.i of this.months){
    this.dashboardService.getConsByMonth(this.i).subscribe((cons: any) =>{
      this.consbyMonth = cons.length;
      // console.log("cons month", this.consbyMonth);
      this.length = this.monthValue.push(this.consbyMonth);
      // this.vals = this.monthValue;
      if (this.length == 12) {
        console.log("monthalue 2", this.monthValue)
        var myChart = new Chart("myChart", {
          type: 'bar',
          data: {
            labels: ['Jan','Feb', 'Mar', 'Apr','May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
              label: 'Contributions',
              data: this.monthValue as any[],
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
      }
    })
    }
    // for (var i = 1; i < 12; i++)
    // {
        // console.log(this.monthValue[1]); //Would give you the id of each client
    // }
    // var val = this.monthValue.map(({ id }) => id);
    // console.log("after loop ", val);
    console.log("monthalue", this.monthValue)
  }
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
