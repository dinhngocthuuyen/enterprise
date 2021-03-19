import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { USER_PROVIDED_EFFECTS } from '@ngrx/effects';
import { FileService } from '../../services/file.service';
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
    private router: Router,
    private reviewService: CoorService,
    private dialogService: NbDialogService,
    private FileService: FileService
  ) { }
  val:any;
  status: any;
  studentId!: string;
  student: any;
  numOfCmt: any;
  file!: string;
  @Input() contribution;
  @Input() contributions;
  conDate: any;
  SubmitTime: any;
  Deadline: any;
  url: any;
  filename: any;
  ngOnInit() {
    //// load user id
    this.userId = localStorage.getItem('userId');
    this.facultyId = localStorage.getItem('facultyId');
    this.url= "http://localhost:3000/upload/download/" + this.facultyId + "/" + this.userId;  
    this.conId = this.route.snapshot.params.id;
    // console.log("contribution id: ", this.conId);
    this.reviewService.getContributionDetail(this.conId).subscribe((contribution: any) => {
      this.contribution = contribution;
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
    //get contribution date
    this.reviewService.getConDate(this.conId).subscribe((contribution: any) => {
      this.conDate = contribution;
      this.SubmitTime = new Date(this.conDate).getTime();
      // console.log("submit time: ", this.SubmitTime)
      this.Deadline = this.SubmitTime +(14*24*60*60*1000);
    });
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
  getdate = new FormGroup({
  date: new FormControl
  })
  getVal(val){
    console.log("aaaa" +val)
  }
  // countDownForm = new FormControl();

  //  getdate(){
  //    this.reviewService
  //  }
  // SubmitTime = new Date(this.conDate).getTime();
  // Deadline = this.SubmitTime +(13*24*60*60*1000);
  showTime: any;
  x = setInterval(() =>{
    var now = new Date().getTime();
    var distance= this.Deadline - now;
    var days = Math.floor(distance/(1000*60*60*24))
    var hours = Math.floor((distance %(1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((distance % (1000*60*60))/(1000*60));
    var seconds = Math.floor((distance % (1000*60))/1000);
    this.showTime = days + " days " + hours + " hours " + minutes + " minutes " +seconds + " seconds ";
    // if(distance<0){
    //   this.openNotApproved()
    //   {
    //   status = "Not Approved";
    //   this.reviewService.updateStatus(this.conId, status).subscribe()
    //   }
    // }
  })

  // onLinkClicked(){
  //   this.FileService.getFile(this.filename).subscribe((file: any) => {
  //     this.file = file;
  //     window.location.href = "http://localhost:3000/upload/download/" + this.facultyId + "/" + this.userId + "/" + this.filename
  //   })
  // }
}
