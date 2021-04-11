import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  facId: any;
  stuId: any;
  student: any;

  constructor(private chatService: StudentService) {}
  messages: any;
  ngOnInit(): void {
    // get coordinator
    this.facId = localStorage.getItem('facultyId');
    this.stuId = localStorage.getItem('userId');
    this.chatService.getUser(this.stuId).subscribe((student: any)=>{
      this.student = student
    })
    //get messages
    this.chatService.getMess(this.facId, this.stuId).subscribe((messages: any) => {
      this.messages = messages
    })
  }

  sendMessage(event: any, reply: boolean) {
    console.log("text", event.message);
    console.log("reply student: ", reply);
    this.chatService.postMess(this.facId, this.stuId, event.message, reply).subscribe();
    window.location.reload();
  }
}
