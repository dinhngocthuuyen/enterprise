import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { ViewProfile } from '../service/manager.service';

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
      _userId: {
        title: 'Student ID',
      },
      _facultyId: {
        title: 'Faculty ID',
      },
      date: {
        title: 'Upload date',
      },
    }
  }
  source!: LocalDataSource
  contributions: any;
  zip: any;
  topicId: any;
  download: any;

  constructor(private ViewProfile: ViewProfile, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.topicId = this.route.snapshot.params.id;

    this.ViewProfile.getContributions(this.topicId).subscribe((contributions: any) => {
      this.contributions = contributions;
      this.source = new LocalDataSource(this.contributions);
    })
    
    this.ViewProfile.getDownloadAll(this.topicId).subscribe((download: any) => {
      this.download = download;
    })
  }
}
