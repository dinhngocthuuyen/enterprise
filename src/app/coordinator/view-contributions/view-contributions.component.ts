import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocalDataSource, ViewCell } from 'ng2-smart-table';
import { FileService } from '../services/file.service';

@Component({
  selector: 'button-view',
  template: `
    <button class="form-control" (click)="onClick()">Download</button>
  `,
})
export class ButtonViewComponent implements ViewCell, OnInit {

  @Input() value!: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }

  onClick() {
    this.save.emit(this.rowData);
  }
}

@Component({
  selector: 'app-view-contributions',
  templateUrl: './view-contributions.component.html',
  styleUrls: ['./view-contributions.component.scss']
})
export class ViewContributionsComponent implements OnInit {

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
            window.location.href = "http://localhost:3000/upload/download/"  + row.metadata._userId + "/" + row.metadata._facultyId + "/" + row.filename
          });
        }
      }
    },
    
  };

  files: any;
  file: any;
  source!: LocalDataSource;
  fid = localStorage.getItem('facultyId')

  constructor(private FileService: FileService) { }

  ngOnInit(): void {
    this.FileService.getUpload(this.fid).subscribe((files: any) => {
      this.files = files;
      this.source = new LocalDataSource(this.files);
    })
  }
}
