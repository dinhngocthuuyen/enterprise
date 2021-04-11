import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClosureService } from 'src/app/admin/services/closure.service';

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
  constructor(
    private closureService: ClosureService,
    private router: Router) { }

  ngOnInit(): void {
    this.closureService.getClosures().subscribe((topic: any) => {
      this.topic = topic;
    })
  }

  countDownDeadline(date) {
    const countDownDate = new Date(date).getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance/ (1000*60*60*24));
    var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    var seconds = Math.floor((distance % (1000*60)) / 1000);
      if (days < 0) {
        return 'Closed';
      } else {
        return `${days}days ${hours}hours ${minutes}minutes ${seconds}seconds`;
      }
  }
  
  onContributeButtonClicked(topicId) {
    this.coordinatorId = localStorage.getItem('userId');
    this.facultyId = localStorage.getItem('facultyId');
    this.router.navigate(['coordinator/' + this.coordinatorId + '/topic/' + topicId + '/review']);
  }
}
