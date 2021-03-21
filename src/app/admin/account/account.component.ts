import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators, FormBuilder, EmailValidator } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { FacultyService } from 'src/app/admin/services/faculty.service';
import { Role } from 'db/models'
import { Faculty } from 'src/app/models';
import { LocalDataSource } from 'ng2-smart-table';
import { UserService } from '../services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
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

  signupForm = new FormGroup({
    email: new FormControl(),
    name: new FormControl(),
    password: new FormControl(),
    role: new FormControl(),
    _facultyId: new FormControl(),
  })
  submitted = false;
  isAlert: boolean = false;
  files: any;
  file: any;
  _facultyId: any;
  username: any;
  name: any;
  role: any;
  sourceUsers!: any;

  constructor(
    private authService: AuthService,
    private facultyService: FacultyService,
    private formBuilder: FormBuilder,
    private userService: UserService

  ) { }
  // usersList: any = [];
  facultyList: Faculty[] = [];
  roleList: Role[] = [
    { role: 'admin', name: 'Admin' },
    { role: 'manager', name: 'Manager' },
    { role: 'coordinator', name: 'Coordinator' },
    { role: 'student', name: 'Student' },
    { role: 'guest', name: 'Guest' }
  ];



  ngOnInit(): void {
    // this.username = localStorage.getItem('username');
    // this.name = localStorage.getItem('name');
    // this.role = localStorage.getItem('role');
    // this._facultyId = localStorage.getItem('facultyId');

    // this.userService.getUpload(this.username,this.name,this.role,this._facultyId).subscribe((files: any) => {
    //   this.files = files;
    //   this.source = new LocalDataSource(this.files);
    // })
    this.getFaculty();

    this.getUser();

    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      name: ['', [Validators.required,]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      role: [],
      _facultyId: [],
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

  getUser() {
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

  // convenience getter for easy access to form fields
  get f() { return this.signupForm.controls; }

  showAlert() {
    this.isAlert = true;
    const _self = this;
    this.getUser();

    setTimeout(function () {
      _self.isAlert = false;
    }, 3000);
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.signupForm.invalid) {
      return;
    }
    const username: string = this.signupForm.value.email;
    const name: string = this.signupForm.value.name;
    const password: string = this.signupForm.value.password;
    const role: string = this.signupForm.value.role;
    const _facultyId: any = this.signupForm.value._facultyId;

    this.authService.create(username, name, password, role, _facultyId).subscribe((res: HttpResponse<any>) => {
      console.log('res', res);

    });

    this.isAlert = true;
    //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signupForm.value))
  }


  // onCreateButtonClicked(username: string, name:string, password: string, role:string, _facultyId: string){
  //   this.submitted = true;

  //   // stop here if form is invalid
  //   if (this.signupForm.invalid) {
  //     return;
  //   }

  //   this.authService.create(username, name, password, role, _facultyId).subscribe((res: HttpResponse<any>) => {
  //     console.log(res);
  //     alert('SUCCESS');
  //   })
  // }
  doSomething() {
    this.isAlert = true;
  }

  onDeleteButtonClicked(event){
    this.userService.deleteUser(event.data._id).subscribe((res: any) => {
      this.getUser();
    });
  }

  onCloseAlert() {
    this.isAlert = !this.isAlert;
  }
}
  











