import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
<<<<<<< Updated upstream
import { LocalDataSource } from 'ng2-smart-table';
import { GuestService } from './service/guest.service';
=======
>>>>>>> Stashed changes

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent implements OnInit {
  settings = {
<<<<<<< Updated upstream
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
=======
    columns: {
      id: {
        title: 'ID'
      },
      title: {
        title: 'Title'
      },
      post: {
        title: 'Post'
>>>>>>> Stashed changes
      },
    }
  };

<<<<<<< Updated upstream
  posts: any;
  post: any;
  source!: LocalDataSource;

  constructor(private router: Router, private GuestService: GuestService, ) {
      
  }
=======
  constructor(private router: Router) {}
>>>>>>> Stashed changes

  ngOnInit(): void {
    this.GuestService.getPost().subscribe((posts: any) => {
      this.posts = posts;
      this.source = new LocalDataSource(this.posts); 
    })   
  }
  
  //toLoginPage(){
    //this.router.navigate(['pages/login']);
  //}


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
  
  toLoginPage(){
    this.router.navigate(['pages/login']);
  }

  onUserRowSelect(event){
    this.router.navigate(['pages/guest/guest-detail/' + event.data._id]);
  }
}
