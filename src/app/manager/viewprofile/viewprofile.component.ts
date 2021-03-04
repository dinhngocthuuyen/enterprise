import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { LocalDataSource } from 'ng2-smart-table';
import { ViewProfile} from '../service/manager.service'
@Component({
  selector: 'ViewProfile',
  templateUrl: './viewprofile.component.html',
})
export class viewComponent implements OnInit {
  settings = {
    hideSubHeader: true,
    actions: false,
    columns: {
      _id: {
        title: 'ID',
      },
      username: {
        title: 'username',
      },
      name: {
        title: 'Name',
      },
      role: {
          title: 'Role',
      }
    }
  };

  posts: any;
  post: any;
  source!: LocalDataSource;

  profileC: any;
  profile!: LocalDataSource;

  constructor(private router: Router, private ViewProfile : ViewProfile, ) {
      
  }

  ngOnInit(): void {
    this.ViewProfile.getPost().subscribe((posts: any) => {
      this.posts = posts;
      this.source = new LocalDataSource(this.posts); 

      this.ViewProfile.getviewcoordinator().subscribe((posts: any) => {
        this.posts = posts;
        this.profile = new LocalDataSource(this.posts); }
      
    )})   
  }

  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: '_id',
        search: query
      },
      {
        field: 'name',
        search: query
      },
      {
        field: 'role',
        search: query
      },
    ], false); 
  }
  
//   onUserRowSelect(event){
//     this.router.navigate(['/' + event.data._id]);
//   }
}
