import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { response, text } from 'express';
import { LocalDataSource } from 'ng2-smart-table';
import { CoorService } from '../services/review.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private chatService: CoorService,
  ) { }
  source!: LocalDataSource;
  messages: any[] = [];
  stuId: any;
  user: any;
  facId: any;
  student: any;
  ngOnInit(): void {
    this.facId = localStorage.getItem('facultyId');
    this.stuId = this.route.snapshot.params.id;
    this.chatService.getMess(this.facId, this.stuId).subscribe((messages: any) => {
      this.messages = messages
    });
    this.chatService.getUser(this.stuId).subscribe((student: any)=>{
      this.student = student
    })
  }
  coorSendMessage(event: any, reply: boolean) {
    console.log("text", event.message)
    console.log("reply coor: ", reply);
    this.chatService.postMess(this.facId, this.stuId, event.message, reply).subscribe();
    window.location.reload();
  }
}
