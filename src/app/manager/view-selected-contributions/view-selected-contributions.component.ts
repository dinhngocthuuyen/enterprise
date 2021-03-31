import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-selected-contributions',
  templateUrl: './view-selected-contributions.component.html',
  styleUrls: ['./view-selected-contributions.component.scss']
})
export class ViewSelectedContributionsComponent implements OnInit {

  settings = {
    mode: 'external',
    hideSubHeader: true,
    actions: {
      add: false,
      edit: false,
      delete: false,
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
    }
  }
  source!:any;


  constructor() { }

  ngOnInit(): void {
  }

}
