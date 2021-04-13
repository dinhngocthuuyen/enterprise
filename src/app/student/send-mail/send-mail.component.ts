import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.scss']
})
export class SendMailComponent implements OnInit {
   email!: FormGroup;

  userId: any;
  user: any[]=[];

  constructor(
    private store: Store<User>,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private fb: FormBuilder,

    ) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    this.studentService.getUser(this.userId).subscribe((user: any) => {
      this.user = user;
    });
    this.email = this.fb.group({
      "_id": [this.userId, [Validators.required]]
  });

  }
  // email = new FormGroup({
  // username: new FormControl(this.userId),

  sendMail(){

    this.studentService.sendMail( this.email.value).subscribe(
      data =>{
        let res:any = data;
        console.log(
          `Students have just submitted the report`
        )
      }
    )
  }

}
