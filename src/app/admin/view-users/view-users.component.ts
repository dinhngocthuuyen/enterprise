import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Faculty } from 'src/app/models';
import { User } from 'src/app/models/user';
import { FacultyService } from '../services/faculty.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss']
})
export class ViewUsersComponent implements OnInit {
  sourceUsers: any;
  facultyList: Faculty [] = [];

  settings = {
    mode: 'external',
    hideSubHeader: true,
    actions: {
      add: false,
      edit: false,
      position: 'right'
    },
    delete: {
      confirmDelete: true,
    },
    columns: {
      _id: {
        title: 'id',
        hide: true,
      },
      username: {
        title: 'Username',
      },
      name: {
        title: 'Name',
      },
      role: {
        title: 'Role',
      },
      facultyName: {
        title: 'Faculty',
      }
    },
  };

  constructor(
   private userService: UserService,
   private facultyService: FacultyService, 
  ) { }

  ngOnInit(): void {
    this.getFaculty();

    this.getUser();

  }

  getUser(){
    this.userService.getUsers().subscribe((res: User[]) => {
      const result = res.map(item => {
        const faculty = this.facultyList.find(v => v._id === item._facultyId);
        return {
          _id: item._id,
          username: item.username,
          name: item.name,
          role: item.role,
          facultyName: faculty?.name,
        }
      });
      this.sourceUsers = new LocalDataSource(result)
    });
  }
  getFaculty(): void {
    this.facultyService.getFaculties().subscribe((res: Faculty[]) => {
      const newFaculty = [
        {
          _id: '',
          name: 'None',
        },
        ...res,
      ]
      this.facultyList = newFaculty;
    });
    this.getUser();
  }
  
  onDeleteButtonClicked(event){
    console.log('hihihi', event.data._id)
    this.userService.deleteUser(event.data._id).subscribe((res: any) => {
      this.getUser();
    });
  }

}
