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
  countDownDeadline1Time: any;
  countDownDeadline2Time: any;
  checked: boolean = true;
  constructor(
    private StudentService: StudentService,
    private closureService: ClosureService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.closureService.getClosure().subscribe((res: any) => {
      console.log('res', res);
      this.startdate = dayjs(res[0].startdate).format('DD-MM-YYYY HH:mm');
      this.deadline1 = res[0].deadline1;

      this.countDownDeadline1(res[0].deadline1);
      this.countDownDeadline2(res[0].deadline2);

      console.log('this.countDownDeadline1Time', this.countDownDeadline1Time);
    })
  }

  countDownDeadline1(date): void {
    const countDownDate = new Date(date).getTime();
    const x = setInterval(() => {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance/ (1000*60*60*24));
      var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
      var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
      var seconds = Math.floor((distance % (1000*60)) / 1000);

      if (days < 0) {
        this.countDownDeadline1Time = 'Deadline';
      } else {
        this.countDownDeadline1Time = `${days} d ${hours}h ${minutes}m ${seconds}s`;
      }
    })
  }

  countDownDeadline2(date): void {
    const countDownDate = new Date(date).getTime();
    const x = setInterval(() => {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance/ (1000*60*60*24));
      var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
      var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
      var seconds = Math.floor((distance % (1000*60)) / 1000);

      if (days < 0) {
        this.countDownDeadline2Time = 'Deadline';
      } else {
        this.countDownDeadline2Time = `${days} d ${hours}h ${minutes}m ${seconds}s`;
      }
    })
  }

  createTask() {
    this.studentId = localStorage.getItem('userId');
    this.facultyId = localStorage.getItem('facultyId');
    this.StudentService.createContribution(this.studentId, this.facultyId).subscribe(() => {
      console.log('create successully', this.route);
      this.router.navigate(['student/' + this.studentId + '/upload-contributions']);
      this.checked = false;
    })
  }

}
