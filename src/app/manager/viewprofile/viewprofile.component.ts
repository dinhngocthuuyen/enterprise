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
    hideSubHeader: false,
    actions: false,
    columns: {
      // _id: {
      //   title: 'ID',
      // },
      username: {
        title: 'username',
      },
      name: {
        title: 'Name',
      },
      // role: {
      //     title: 'Role',
      // }
    }
  };
  userId:any;
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
    this.userId = localStorage.getItem('userId');

  }


   onUserRowSelect(event){
     this.router.navigate(['manager/'+this.userId+'/viewdetail/' + event.data._id]);

   }

   studentdetail(event){
    this.router.navigate(['manager/'+this.userId+'/viewdetail/' + event.data._id]);

  }
}
