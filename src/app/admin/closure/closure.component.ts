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
      
      position: 'right'
    },
    delete: {
      confirmDelete: true,
    },
    edit: {
      confirmSave: true,
    },
    columns: {
      _id: {
        title: 'id',
        hide: true,
      },
      startdateFormat: {
        title: 'Start Date',
      },
      deadline1Format: {
        title: 'Deadline 1',
      },
      deadline2Format: {
        title: 'Deadline 2'
      },
      startdate: {
        hide: true,
      },
      deadline1: {
        hide: true,
      },
      deadline2: {
        hide: true,
      },
      topic: {
        title: 'Topic'
      },
     
    },

  };

  deadlineForm = new FormGroup({
    _closureId: new FormControl(),
    topic: new FormControl(),
    startdate: new FormControl(),
    deadline1: new FormControl(),
    deadline2: new FormControl(),
    // _facultyId: new FormControl(),
  })
  
  isAlert: boolean = false;
  file: any;
  sourceClosures!: LocalDataSource;
  files: any;
  // _facultyId: any;
  startdate: any ;
  deadline1: any ;
  deadline2: any ;

 constructor(private authService: AuthService, private facultyService: FacultyService, private closureService: ClosureService,){
   
 }

  // facultyList: any [] = [];
  // closuresList: any = [];

  ngOnInit(): void {
    // this._facultyId = localStorage.getItem('facultyId');
    // this.startdate = localStorage.getItem('startdate');
    // this.deadline1 = localStorage.getItem('deadline1');
    // this.deadline2 = localStorage.getItem('deadline2');
   
    
    // this.closureService.getUpload(this.startdate,this.deadline1,this.deadline2,this._facultyId).subscribe((files: any) => {
    //   this.files = files;
    //   this.source = new LocalDataSource(this.files);
    // })
    
    // this.getFaculty();

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
        // const faculty = this.facultyList.find(v => v._id === item._facultyId);
        return {
          _id: item._id,
          startdateFormat: dayjs(item.startdate).format('DD-MM-YYYY HH:mm'),
          deadline1Format: dayjs(item.deadline1).format('DD-MM-YYYY HH:mm'),
          deadline2Format: dayjs(item.deadline2).format('DD-MM-YYYY HH:mm'),
          startdate: item.startdate,
          deadline1: item.deadline1,
          deadline2: item.deadline2,
          topic: item.topic,
          // _facultyId: faculty?._id,
          // facultyName: faculty?.name,
        }
      });

      this.sourceClosures = new LocalDataSource(result);
    });
  }

  doSomething() {
    this.isAlert = true;
  }

  onDeleteButtonClicked(event){
    this.closureService.deleteClosure(event.data._id).subscribe((res: any) => {
      this.getClosure();
    });
  }

  onEditButtonClicked(event){
    const _closureId = event.data._id;
    const startdate = event.data.startdate;
    const deadline1 = event.data.deadline1;
    const deadline2 = event.data.deadline2;
    const topic = event.data.topic;
    // const _facultyId = event.data._facultyId;

    // const selectedFaculty = this.facultyList.find(v => v._id === _facultyId);

    this.deadlineForm.patchValue({
      _closureId,
      startdate,
      deadline1,
      deadline2,
      topic,
      // _facultyId: selectedFaculty,
    });
  }

  showAlert() {
    this.isAlert = true;
    const _self = this;
    this.getClosure();

    setTimeout(function () {
      _self.isAlert = false;
    }, 3000);
  }

  onSubmitButtonClicked() {
    const topic: string =  this.deadlineForm.value.topic;
    const startdate: string = this.deadlineForm.value.startdate;
    const deadline1: string = this.deadlineForm.value.deadline1;
    const deadline2: string = this.deadlineForm.value.deadline2;
    // const _facultyId: string = this.deadlineForm.value._facultyId;
    
    this.authService.submit(topic,startdate, deadline1, deadline2).subscribe((res: HttpResponse<any>) => {
      this.showAlert();
    });
  }

  onUpdateButtonClicked() {
    const _closureId: string = this.deadlineForm.value._closureId;
    const startdate: string = this.deadlineForm.value.startdate;
    const deadline1: string = this.deadlineForm.value.deadline1;
    const deadline2: string = this.deadlineForm.value.deadline2;
    const topic: string =  this.deadlineForm.value.topic;
    // const _facultyId: string = this.deadlineForm.value._facultyId;
    
    this.closureService.updateClosure(_closureId, startdate, deadline1, deadline2,topic).subscribe((res: any) => {
      this.showAlert();
    });
  }

  onCloseAlert() {
    this.isAlert = !this.isAlert;
  }
}