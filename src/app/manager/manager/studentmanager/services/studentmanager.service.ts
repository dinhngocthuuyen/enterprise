import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class StudentManagerService {
  API_PATH = "http://localhost:3000/students"
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'mode': 'no-cors'
    }),
    //params: httpParam
  };
  student !: Student;
  students !: Student[];

  constructor(private http: HttpClient) {

  }

  
  getStudentManagers(): Observable<Student[]> {
    return this.http.get<Student[]>(this.API_PATH, this.options);
  }

}
