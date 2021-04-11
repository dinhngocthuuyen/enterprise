import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClosureService } from 'src/app/admin/services/closure.service';

@Component({
  selector: 'app-view-topics',
  templateUrl: './view-topics.component.html',
  styleUrls: ['./view-topics.component.scss']
})
export class ViewTopicsComponent implements OnInit {

  userId!: any;
  startdate: any;
  deadline1: any;
  deadline2: any;
  topic: any;
  topicId: any;
  countDownDeadline1Time: any;
  countDownDeadline2Time: any;

  constructor(private closureService: ClosureService, private router: Router) { }

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
    this.userId = localStorage.getItem('userId');
    this.router.navigate(['manager/' + this.userId + '/topic/' + topicId + '/view-selected-contributions']);
  }
}
