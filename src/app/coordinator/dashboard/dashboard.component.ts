import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CoorService } from '../services/review.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private dashboardService: CoorService
    ) {
    }
  public pageTitle!: string;
  user: any;
  facId: any;
  faculty: any;
  ngOnInit(): void {
    this.facId = localStorage.getItem('facultyId');
    this.dashboardService.getFaculty(this.facId).subscribe((faculty: any) => {
      this.faculty = faculty
    });
  }
}
