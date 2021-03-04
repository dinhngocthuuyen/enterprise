import { Component, OnInit } from '@angular/core';
import { CoorService } from '../services/review.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
})
export class ChatListComponent implements OnInit {

  constructor(
    private chatService: CoorService,

  ) { }
  students: any;
  facId: any;
  ngOnInit(): void {
    this.facId = localStorage.getItem('facultyId')
    this.chatService.getStudents(this.facId).subscribe((students: any) => {
      this.students = students
    })
  }

}
