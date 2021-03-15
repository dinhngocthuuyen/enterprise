import { Component, OnInit } from '@angular/core';
import {TopicService} from '../services/topic.service'

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.scss']
})
export class CreateTopicComponent implements OnInit {

  constructor(private TopicService: TopicService) { }

  ngOnInit(): void {
  }

  topic: any;
  isAlert: boolean = false;

  onCreateButtonClicked(title, date1, date2){
    this.TopicService.createTopic(title, date1, date2).subscribe((topic: any) =>{
      this.topic = topic;
      this.isAlert = true;
    })
  }
}
