import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder, NbWindowService } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { FacultyService } from 'src/app/admin/services/faculty.service';
import { Faculty } from 'src/app/models';
import { ClosureService } from 'src/app/admin/services/closure.service';
import { Closure } from 'src/app/models';
import { LocalDataSource } from 'ng2-smart-table';
import * as dayjs from 'dayjs'

@Component({
  selector: 'app-closure',
  templateUrl: './closure.component.html',
  styleUrls: ['./closure.component.scss']
})
export class ClosureComponent implements OnInit {

   url = "http://localhost:3000/closure"

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
      topic:{
        title: 'Topic'
      },
      startdate: {
        title: 'Start Date',
      },
      deadline1: {
        title: 'Deadline 1',
      },
      deadline2: {
        title: 'Deadline 2'
      }
    },

  };

  deadlineForm = new FormGroup({
    startdate: new FormControl(),
    deadline1: new FormControl(),
    deadline2: new FormControl(),
    topic: new FormControl(),
  })
  
  isAlert: boolean = false;
  file: any;
  sourceClosures!: LocalDataSource;
  files: any;
  startdate: any ;
  deadline1: any ;
  deadline2: any ;

 constructor(private authService: AuthService, private facultyService: FacultyService, private closureService: ClosureService,){
   
 }

  ngOnInit(): void {
    // this._facultyId = localStorage.getItem('facultyId');
    // this.startdate = localStorage.getItem('startdate');
    // this.deadline1 = localStorage.getItem('deadline1');
    // this.deadline2 = localStorage.getItem('deadline2');
   
    
    // this.closureService.getUpload(this.startdate,this.deadline1,this.deadline2,this._facultyId).subscribe((files: any) => {
    //   this.files = files;
    //   this.source = new LocalDataSource(this.files);
    // })

    this.getClosure();
  }

  
  // getFaculty(): void {
  //   this.facultyService.getFaculties().subscribe((res: Faculty[]) => {
  //     const newFaculty = [
  //       {
  //         _id: '',
  //         name: 'None',
  //       },
  //       ...res,
  //     ]
  //     this.facultyList = newFaculty;
  //   });
  // }

  getClosure(): void {
    this.closureService.getClosures().subscribe((res: Closure[]) => {
      const result = res.map(item => {
        return {
          _id: item._id,
          topic: item.topic,
          startdate: dayjs(item.startdate).format('DD-MM-YYYY HH:mm'),
          deadline1: dayjs(item.deadline1).format('DD-MM-YYYY HH:mm'),
          deadline2: dayjs(item.deadline2).format('DD-MM-YYYY HH:mm')
        }
      });
      this.sourceClosures = new LocalDataSource(result);
    });
  }

  onSubmit() {
      const topic: string = this.deadlineForm.value.topic;
      const startdate: string = this.deadlineForm.value.startdate;
      const deadline1: string = this.deadlineForm.value.deadline1;
      const deadline2: string = this.deadlineForm.value.deadline2;
      
      this.authService.submit(topic, startdate, deadline1, deadline2).subscribe((res: HttpResponse<any>) => {
        console.log('res', res);
        this.isAlert = true;
        const _self = this;
        this.getClosure();

        setTimeout(function () {
          _self.isAlert = false;
        }, 3000);
      });
    }

    onUpdate() {
      const topic: string = this.deadlineForm.value.topic;
      const startdate: string = this.deadlineForm.value.startdate;
      const deadline1: string = this.deadlineForm.value.deadline1;
      const deadline2: string = this.deadlineForm.value.deadline2;
      
      this.authService.update(topic, startdate, deadline1, deadline2).subscribe((res: HttpResponse<any>) => {
        console.log('res', res);      
      });
      this.isAlert = true;
    }
  // onSubmitButtonClicked(startdate: String, deadline1:String, deadline2: String, _facultyId: string){
  //   this.authService.submit(startdate, deadline1, deadline2, _facultyId ).subscribe((res: HttpResponse<any>) => {
  //     console.log(res);
  //   })
  // }

  doSomething() {
    this.isAlert = true;
  }

  onDeleteButtonClicked(event){
    console.log('hihihi', event.data._id)
    this.closureService.deleteClosure(event.data._id).subscribe((res: any) => {
      this.getClosure();
    });
  }

  onCloseAlert() {
    this.isAlert = !this.isAlert;
  }
}