import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalDataSource, ViewCell } from 'ng2-smart-table';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'button-view',
  template: `
    <button class="form-control" (click)="onClick()">Download</button>
  `,
})
export class ButtonViewComponent implements ViewCell, OnInit {
  renderValue!: string;

  @Input() value!: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

  onClick() {
    this.save.emit(this.rowData);
  }
}

@Component({
  selector: 'app-upload-contributions',
  templateUrl: './upload-contributions.component.html',
  styleUrls: ['./upload-contributions.component.scss']
})
export class UploadContributionsComponent implements OnInit {

  url = "http://localhost:3000/upload"

  settings = {
    mode: 'external',
    hideSubHeader: true,
    actions: {
      add: false,
      edit: false,
      position: 'right'
    },
    columns: {
      _id: {
        title: 'ID',
      },
      filename: {
        title: 'File name',
      },
      uploadDate: {
        title: 'Upload date',
      },
      contentType: {
        title: 'File type'
      },
      button: {
        title: 'Download',
        type: 'custom',
        renderComponent: ButtonViewComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            window.location.href = "http://localhost:3000/upload/download/"+ row.metadata._facultyId + "/" + row.metadata._userId + "/" + row.filename;
          });
        }
      }
    },

  };

  files: any;
  file: any;
  source!: LocalDataSource;
  facultyId: any;
  userId: any;
  isSubmit: boolean = false;

  constructor(private StudentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.facultyId = localStorage.getItem('facultyId');
    this.userId = localStorage.getItem('userId');

    this.StudentService.getUpload(this.facultyId, this.userId).subscribe((files: any) => {
      this.files = files;
      this.source = new LocalDataSource(this.files);
    })

    this.StudentService.getClosure(this.facultyId, this.userId).subscribe((res: any) => {
      this.isSubmit = !res.isSubmit;
    })
  }

  onDeleteButtonClicked(event){
    this.StudentService.deleteUpload(event.data._id).subscribe((file: any) => {
      this.file = file;
    })
  }
}