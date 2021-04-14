import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { htmlPrefilter } from 'jquery';
import { LocalDataSource, ViewCell } from 'ng2-smart-table';
import { StudentService } from '../services/student.service'
import { TermConditionComponent } from '../upload/term-condition/term-condition.component';

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
      filename: {
        title: 'File name',
      },
      uploadDate: {
        title: 'Upload date',
        valuePrepareFunction: (date: any) => {
          return new DatePipe('en-US').transform(date, 'MMMM d, YYYY')}
      },
      button: {
        title: 'Download',
        type: 'custom',
        renderComponent: ButtonViewComponent,
        onComponentInitFunction(instance) {
          instance.save.subscribe(row => {
            window.location.href = "http://localhost:3000/download/" + row.metadata._userId + "/" + row.filename;
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
  topicId: any;
  contributionId: any;
  contribution: any;
  disableUploadButton: boolean = false;
  topic: any;
  zip: any;
  cmts: any;
  numOfCmt: any;
  constructor(private StudentService: StudentService,
    private dialogService: NbDialogService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.facultyId = localStorage.getItem('facultyId');
    this.userId = localStorage.getItem('userId');
    this.topicId = this.route.snapshot.params.id;

    this.StudentService.getDeadline(this.topicId).subscribe((closure: any) => {
      var now = new Date().getTime();
      var deadline1 = new Date(closure.deadline1).getTime();
      var deadline2 = new Date(closure.deadline2).getTime();
        if(now > deadline1){
          this.disableUploadButton = true
        }
      this.StudentService.getUpload(this.userId, this.topicId).subscribe((files: any) => {
        this.disableUploadButton = false;
        this.files = files;
        this.source = new LocalDataSource(this.files);
        if(now > deadline2){
          this.disableUploadButton = true;
        }
      })
    })

    this.StudentService.getContribution(this.userId, this.topicId).subscribe((contribution: any) => {
      this.contribution = contribution;
      this.StudentService.getComments(contribution._id).subscribe((cmts: any) => {
        this.cmts = cmts
        this.numOfCmt = this.cmts.length
      });
    });
  }

  onDeleteButtonClicked(event){
    this.StudentService.deleteUpload(event.data._id).subscribe((file: any) => {
      this.file = file;
    })
    window.location.reload();
  }
  checked = false;

  toggle(checked: boolean) {
    this.checked = checked;
  }
  openDialogTerm() {
    this.dialogService.open(TermConditionComponent)
      .onClose.subscribe();
  }
}
