import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student.service'

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  studentId!: any;
  facultyId: any;
  checked: boolean = true;
  constructor(
    private StudentService: StudentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }
  createTask() {
    this.studentId = localStorage.getItem('userId');
    this.facultyId = localStorage.getItem('facultyId');
    this.StudentService.createContribution(this.studentId, this.facultyId).subscribe(() => {
      console.log('create successully', this.route);
      this.router.navigate(['student/' + this.studentId + '/upload-contributions']);
      this.checked = false;
    })
  }

}
