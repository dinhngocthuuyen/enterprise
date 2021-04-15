import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacultyService } from 'src/app/admin/services/faculty.service';
import { CoorService } from 'src/app/coordinator/services/review.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  faculty: any;
  file!: string;
  status: any;
  files = [];
  conId!: string;
  contributions: any;
  facId: any;
  topicId: any;
  source!: LocalDataSource;
  approved!: LocalDataSource;



  constructor( private facultyService: FacultyService,     private reviewService: CoorService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.facultyService.getFaculties().subscribe((faculty: any) =>{
      this.faculty = faculty;
    });

    this.facId = localStorage.getItem('facultyId');
    this.topicId = this.route.snapshot.params.id;
    this.reviewService.getContribution(this.facId, this.topicId).subscribe((contributions: any) => {
      this.contributions = contributions;
      this.source = new LocalDataSource(this.contributions)
    });

    // this.reviewService.getApprovedCs(this.facId, this.topicId).subscribe((contributions: any) => {
    //   this.contributions = contributions;
    //   this.approved = new LocalDataSource(this.contributions)
    // });

  }
}
