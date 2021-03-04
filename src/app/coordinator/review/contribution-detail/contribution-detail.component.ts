import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  studentId!: string;
  numOfCmt: any;
  file!: string;
  @Input() contribution;
  ngOnInit() {
    // this.facId = localStorage.getItem('facultyId');
    this.conId = this.route.snapshot.params.id;
    // console.log("contribution id: ", this.conId);
    this.reviewService.getContributionDetail(this.conId).subscribe((contribution: any) => {
      this.contribution = contribution;
      this.studentId = this.contribution._id;
      console.log("student Id"+this.studentId)
    });
    this.reviewService.getComments(this.conId).subscribe((cmts: any) => {
      this.cmts = cmts
      this.numOfCmt = this.cmts.length
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
  // countDownForm = new FormGroup({
  //   date: new FormControl(''),
  
  // })
  SubmitTime = new Date("2021-02-23T04:21:59.159Z").getTime();
  Deadline = this.SubmitTime +(14*24*60*60*1000);
  showTime: any;
  x = setInterval(() =>{
    var now = new Date().getTime();
    var distance= this.Deadline - now;
    var days = Math.floor(distance/(1000*60*60*24))
    var hours = Math.floor((distance %(1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((distance % (1000*60*60))/(1000*60));
    var seconds = Math.floor((distance % (1000*60))/1000);
    this.showTime = days + " days " + hours + " hours " + minutes + " minutes " +seconds + " seconds ";
    if(distance= 0 && distance<0){
      this.openNotApproved()
      {
      status = "Not Approved";
      this.reviewService.updateStatus(this.conId, status).subscribe()   
      } }
  })
}
