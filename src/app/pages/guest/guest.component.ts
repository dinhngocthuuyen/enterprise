import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent implements OnInit {
  settings = {
    columns: {
      id: {
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

  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  
  toLoginPage(){
    this.router.navigate(['pages/login']);
  }

}
