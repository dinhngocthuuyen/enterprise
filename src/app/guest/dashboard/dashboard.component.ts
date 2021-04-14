import { Component, OnInit } from '@angular/core';
import { FacultyService } from 'src/app/admin/services/faculty.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  faculty: any;

  constructor( private facultyService: FacultyService) { }

  ngOnInit(): void {
    this.facultyService.getFaculties().subscribe((faculty: any) =>{
      this.faculty = faculty;
    })
    }

  }

