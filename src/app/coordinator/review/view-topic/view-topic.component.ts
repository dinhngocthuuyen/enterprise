import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClosureService } from 'src/app/admin/services/closure.service';
import * as dayjs from 'dayjs'

@Component({
  selector: 'app-view-topic',
  templateUrl: './view-topic.component.html',
  styleUrls: ['./view-topic.component.scss']
})
export class ViewTopicComponent implements OnInit {
  coordinatorId!: any;
  facultyId: any;
  startdate: any;
  deadline1: any;
  deadline2: any;
  topic: any;
  topicId: any;
  countDownDeadline1Time: any;
  countDownDeadline2Time: any;
  checked: boolean = true;
  constructor(
    private closureService: ClosureService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.closureService.getClosures().subscribe((topic: any) => {
      this.topic = topic;
      this.startdate = dayjs(this.topic.startdate).format('DD-MM-YYYY HH:mm');
      this.countDownDeadline1(this.topic[0].deadline1);
      this.countDownDeadline2(this.topic[0].deadline2); 
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
    return this.countDownDeadline1Time
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
    return this.countDownDeadline2Time
  }

  onContributeButtonClicked(topicId) {
    this.coordinatorId = localStorage.getItem('userId');
    this.facultyId = localStorage.getItem('facultyId');
    this.router.navigate(['coordinator/' + this.coordinatorId + '/topic/' + topicId + '/review']);
    this.checked = false;
  }
}
