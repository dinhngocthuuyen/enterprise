import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
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
     private ChatService: CoorService,
     private formBuilder: FormBuilder,

  ) { }
  source!: LocalDataSource;
  messages: any[] = [];
  userId: any;
  user: any;
  ngOnInit(): void {
    this.ChatService.getMess().subscribe((messages: any) => {
      this.messages = messages;
      this.source = new LocalDataSource(this.messages)

      this.userId = localStorage.getItem('userId');
      this.ChatService.getUser(this.userId).subscribe((user: any) => {
        this.user = user;
      })
    })   
  }
  postMess(text: string, userName: string, _userId: string) {

    this.ChatService.postMess(text, userName, _userId).subscribe((response: any) =>{
      console.log(response)
    });
  }
  // items = this.ChatService.getMess();
  // checkoutForm = this.formBuilder.group({
  //   text: '',
  //   userName: '',
  //   userId:'',
  // });

  // onSubmit(): void {
  //   // Process checkout data here
  //   this.items = this.ChatService.postMess;
  //   console.warn('Your order has been submitted', this.checkoutForm.value);
  //   this.checkoutForm.reset();
  // }
  // sendMessage(event: any, userName: string) {
  //   this.messages.push({
  //     text: event.message,
  //     date: new Date(),
  //     // type: files.length ? 'file' : 'text',
  //     // files: files,
  //     user: {
  //       name: userName,
  //     },
  //   });
  // }
}
