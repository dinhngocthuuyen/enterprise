import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { GuestService } from './service/guest.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent implements OnInit {
  settings = {
    columns: {
      _id: {
        title: 'ID'
      },
      title: {
        title: 'Title'
      },
      post: {
        title: 'Post'
      },
    }
  };

  posts: any;

  constructor(private router: Router, private GuestService: GuestService, ) {}

  ngOnInit(): void {
    this.GuestService.getPost().subscribe((posts: any) => {
      this.posts = posts;
    })
  }
  
  //toLoginPage(){
    //this.router.navigate(['pages/login']);
  //}



}
