import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { LocalDataSource } from 'ng2-smart-table';
import { GuestService } from './service/guest.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent implements OnInit {
  settings = {
    hideSubHeader: true,
    actions: false,
    columns: {
      _id: {
        title: 'ID',
      },
      title: {
        title: 'Title',
      },
      post: {
        title: 'Post',
      },
    }
  };

  posts: any;
  post: any;
  source!: LocalDataSource;

  constructor(private router: Router, private GuestService: GuestService, ) {
      
  }

  ngOnInit(): void {
    this.GuestService.getPost().subscribe((posts: any) => {
      this.posts = posts;
      this.source = new LocalDataSource(this.posts); 
    })   
  }

  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: '_id',
        search: query
      },
      {
        field: 'title',
        search: query
      },
      {
        field: 'post',
        search: query
      }
    ], false); 
  }
  
  onUserRowSelect(event){
    this.router.navigate(['pages/guest/guest-detail/' + event.data._id]);
  }
}
