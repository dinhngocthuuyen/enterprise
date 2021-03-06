import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { NbThemeService } from '@nebular/theme';

import { Contribution, ContributionData } from 'src/app/models';
import { CoorService } from '../services/review.service';
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
  cons: Contribution[]=[];
  CoorService: any;


  constructor(
    private route: ActivatedRoute,
    private dashboardService: CoorService,
    private contributionService: ContributionData,
    ) {}
    status: any;
    numOfCon: any;

  public pageTitle!: string;
  user: any;
  facId: any;
  faculty: any;
  approveContribution: any;
  // report

  ngOnInit(): void {
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
          const date = this.cons.map(i => i.date)
          // console.log("cons date: ", date);
          console.log("con year: ", this.conYear)
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
