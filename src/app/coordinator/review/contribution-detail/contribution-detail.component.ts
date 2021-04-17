import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
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
  facultyId: any;
  stuId!: string;
  constructor(
    private route: ActivatedRoute,
    private reviewService: CoorService,
    private dialogService: NbDialogService,
  ) { }
  val:any;
  status: any;
  studentId!: string;
  student: any;
  numOfCmt: any;
  @Input() contribution;
  @Input() contributions;
  conDate: any;
  SubmitTime: any;
  Deadline: any;
  url: any;
  files: any[] = [];
  ngOnInit() {
    //// load user id
    this.userId = localStorage.getItem('userId');
    this.facultyId = localStorage.getItem('facultyId');
      
    this.conId = this.route.snapshot.params.id;
    this.reviewService.getContributionDetail(this.conId).subscribe((contribution: any) => {
      this.contribution = contribution;
      this.studentId = contribution[0]._userId;
      this.files = contribution[0].file;
      this.SubmitTime = new Date(contribution[0].date).getTime();
      this.Deadline = this.SubmitTime +(14*24*60*60*1000);
    });
    this.reviewService.getComments(this.conId).subscribe((cmts: any) => {
      this.cmts = cmts
      this.numOfCmt = this.cmts.length
    });


    /// load student name
    this.reviewService.getStudentId(this.conId).subscribe((stuId: any) =>{
      this.stuId = stuId;
      this.reviewService.getUser(this.stuId).subscribe((student: any) =>{
        this.student = student
      })
    })
  }
  ngAfterViewInit() {
  }
  openApproved(){
    status = "Approved";
    this.reviewService.updateStatus(this.conId, status).subscribe();
    window.location.reload();
  }
  openNotApproved(){
    status = "Not Approved";
    this.reviewService.updateStatus(this.conId, status).subscribe();
    window.location.reload();
  }
  openDialogComment() {
    this.dialogService.open(CommentComponent)
      .onClose.subscribe((cmt: any)  =>{
        this.reviewService.postComment(this.conId, cmt).subscribe();
        window.location.reload();
      });
  }

  getdate = new FormGroup({
  date: new FormControl
  })
  showTime: any;
  x = setInterval(() =>{
    var now = new Date().getTime();
    var distance= this.Deadline - now;
    var days = Math.floor(distance/(1000*60*60*24))
    var hours = Math.floor((distance %(1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((distance % (1000*60*60))/(1000*60));
    var seconds = Math.floor((distance % (1000*60))/1000);
    this.showTime = days + " days " + hours + " hours " + minutes + " minutes " +seconds + " seconds ";
  })
}
