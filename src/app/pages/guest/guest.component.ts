import { DataSource } from '@angular/cdk/table';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { DataSet } from 'ng2-smart-table/lib/lib/data-set/data-set';
import { GuestService } from './service/guest.service';

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

  constructor(private router: Router, private GuestService: GuestService) {}

  ngOnInit(): void {
  }
  
  toLoginPage(){
    this.router.navigate(['pages/login']);
  }

  data = DataSource.bind(this.GuestService.viewPostService());
}
