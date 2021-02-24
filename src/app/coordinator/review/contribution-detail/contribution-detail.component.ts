import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { CoorService } from '../../services/review.service';

@Component({
  selector: 'app-contribution-detail',
  templateUrl: './contribution-detail.component.html',
  styleUrls: ['./contribution-detail.component.scss']
})
export class ContributionDetailComponent implements OnInit {
  conId!: string;
  constructor(
    private route: ActivatedRoute,
    private reviewService: CoorService,
    private dialogService: NbDialogService,
  ) { }
  status: any;
  @Input() contribution;
  ngOnInit(): void {
    // this.facId = localStorage.getItem('facultyId');
    this.conId = this.route.snapshot.params.id;
    console.log("contribution id: " + this.conId);
    this.reviewService.getContributionDetail(this.conId).subscribe((contribution: any) => {
      this.contribution = contribution;
    });
    this.status = localStorage.getItem('status')
  }

  openApproved(){
    status = "Approved";
    this.reviewService.updateStatus(this.conId, status).subscribe(() =>{
    })
  }
  openNotApproved(){
    status = "Not Approved";
    this.reviewService.updateStatus(this.conId, status).subscribe(() =>{
    })
  }
}
