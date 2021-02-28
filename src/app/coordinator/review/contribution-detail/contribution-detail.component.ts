import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { USER_PROVIDED_EFFECTS } from '@ngrx/effects';
import { CoorService } from '../../services/review.service';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-contribution-detail',
  templateUrl: './contribution-detail.component.html',
  styleUrls: ['./contribution-detail.component.scss']
})
export class ContributionDetailComponent implements OnInit, AfterViewInit {
  conId!: string;
  cmts: any[]=[];
  userId: any;
  stuId!: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reviewService: CoorService,
    private dialogService: NbDialogService,
  ) { }
  status: any;
  studentId!: string
  @Input() contribution;
  ngOnInit() {
    // this.facId = localStorage.getItem('facultyId');
    this.conId = this.route.snapshot.params.id;
    console.log('student id: ', this.studentId);
    // console.log("contribution id: ", this.conId);
    this.reviewService.getContributionDetail(this.conId).subscribe((contribution: any) => {
      this.contribution = contribution;
    });
    this.reviewService.getComments(this.conId).subscribe((cmts: any) => {
      this.cmts = cmts
    });
    //// load user id
    this.userId = localStorage.getItem('userId');
    /// load student
    // this.stuId = this.studentId;
    // this.reviewService.getUser(this.studentId).subscribe(() => {

    // })
  }
  ngAfterViewInit() {
  }
  openApproved(){
    status = "Approved";
    this.reviewService.updateStatus(this.conId, status).subscribe()
  }
  openNotApproved(){
    status = "Not Approved";
    this.reviewService.updateStatus(this.conId, status).subscribe()
  }
  openDialogComment() {
    this.dialogService.open(CommentComponent)
      .onClose.subscribe((cmt: any)  =>{
        this.reviewService.postComment(this.conId, cmt).subscribe();
        // this.cmts.push(this.cmts);
        // console.log("cmts comment " + this.cmts)
      });
  }
}
