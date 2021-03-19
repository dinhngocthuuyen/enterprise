import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClosureService } from 'src/app/admin/services/closure.service';
import { StudentService } from '../services/student.service'
import * as dayjs from 'dayjs'

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  studentId!: any;
  facultyId: any;
  startdate: any;
  deadline1: any;
  deadline2: any;
  topic: any;
  topicId: any;
  checked: boolean = true;
  constructor(
    private StudentService: StudentService,
    private closureService: ClosureService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.closureService.getClosures().subscribe((topic: any) => {
      this.topic = topic;
      //this.startdate = dayjs(this.topic.startdate).format('DD-MM-YYYY HH:mm');
      // this.countDownDeadline1(this.topic.deadline1);
      // this.countDownDeadline2(this.topic.deadline2); 
    })
  }

  countDownDeadline1(date) {
    const countDownDate = new Date(date).getTime();
    // const x = setInterval(() => {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance/ (1000*60*60*24));
      var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
      var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
      var seconds = Math.floor((distance % (1000*60)) / 1000);
      if (days < 0) {
        return 'Closed';
      } else {
        return `${days} d ${hours}h ${minutes}m ${seconds}s`;
      }
    // })
  }

  countDownDeadline2(date) {
    const countDownDate = new Date(date).getTime();
    // const x = setInterval(() => {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance/ (1000*60*60*24));
      var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
      var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
      var seconds = Math.floor((distance % (1000*60)) / 1000);
      if (days < 0) {
        return 'Closed';
      } else {
        return `${days} d ${hours}h ${minutes}m ${seconds}s`;
      }
    // })
  }
  
  onContributeButtonClicked(topicId) {
    this.studentId = localStorage.getItem('userId');
    this.facultyId = localStorage.getItem('facultyId');
    this.router.navigate(['student/' + this.studentId + '/topic/' + topicId + '/upload-contributions']);
    this.checked = false;
  }

}
