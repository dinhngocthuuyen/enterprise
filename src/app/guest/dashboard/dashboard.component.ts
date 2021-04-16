import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoorService } from 'src/app/coordinator/services/review.service';
import { LocalDataSource } from 'ng2-smart-table';
import { GuestService } from '../guest.service';

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
  numofcons: any;
  percent!: number;

  constructor( private facultyService: GuestService,     private reviewService: CoorService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.facId = localStorage.getItem('facultyId');
    this.topicId = this.route.snapshot.params.id;
    this.facultyService.getFaculty(this.facId).subscribe((faculty: any) =>{
      this.faculty = faculty
    })
    this.facultyService.getContributions(this.facId).subscribe((cons: any) =>{
      this.numofcons = cons.length;
      console.log("numofcons", this.numofcons)
      this.facultyService.getAllCons().subscribe((allcon: any)=>{
        this.percent = Math.round(cons.length * 100 / allcon.length)
      })
    },
    );
    // this.reviewService.getApprovedCs(this.facId, this.topicId).subscribe((contributions: any) => {
    //   this.contributions = contributions;
    //   this.approved = new LocalDataSource(this.contributions)
    // });

  }
}
