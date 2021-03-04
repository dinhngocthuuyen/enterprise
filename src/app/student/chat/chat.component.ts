import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  facId: any;
  coordinator: any;
  stuId: any;
  student: any;

  constructor(private chatService: StudentService) {}
  messages: any;
  ngOnInit(): void {
    // get coordinator
    this.facId = localStorage.getItem('facultyId');
    this.chatService.getCoor(this.facId).subscribe((coordinator: any)=>{
      this.coordinator = coordinator
    })
    //////
    this.stuId = localStorage.getItem('id');
    this.chatService.getUser(this.stuId).subscribe((student: any)=>{
      this.student = student
    })
    //get messages
    this.chatService.getMess(this.stuId).subscribe((messages: any) => {
      this.messages = messages
    })
  }
  // messages: any[] = [];

  sendMessage(event: any, reply: boolean) {
    // const files = !event.files ? [] : event.files.map((file) => {
    //   return {
    //     url: file.src,
    //     type: file.type,
    //     icon: 'file-text-outline',
    //   };
    // });

    // this.messages.push({
    //   text: event.message,
    //   date: new Date(),
    //   reply: reply,
    //   // type: files.length ? 'file' : 'text',
    //   // files: files,
    //   user: {
    //     // name: userName
    //   },
    // });
    console.log("text", event.message)
    this.chatService.postMess(this.stuId, event.message).subscribe();
  }
}
