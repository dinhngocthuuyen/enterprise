import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  ) { }
  @Input() contribution;
  ngOnInit(): void {
    this.conId = this.route.snapshot.params.id;
    console.log("contribution id: " + this.conId);
    this.reviewService.getContributionDetail(this.conId).subscribe((contribution: any) => {
      this.contribution = contribution;
    })
  }
}
