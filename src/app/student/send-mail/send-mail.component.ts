import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { StudentService } from '../services/student.servies';

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.scss']
})
export class SendMailComponent implements OnInit {
  userId: any;
  user: any[]=[];

  constructor(
    private store: Store<User>,
    private studentService: StudentService,

    ) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    this.studentService.getUser(this.userId).subscribe((user: any) => {
      this.user = user;
    });
  }
  getMail = new FormGroup({
    username: new FormControl(''),
  
  })

}
