import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Faculty } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  API_PATH = "http://localhost:3000/faculties"
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'mode': 'no-cors'
    }),
    //params: httpParam
  };
  faculty !: Faculty;
  faculties !: Faculty[];

  constructor(private http: HttpClient) {

  }

  getFaculties(): Observable<Faculty[]> {
    return this.http.get<Faculty[]>(this.API_PATH, this.options);
  }
  getFaculty(): Observable<Faculty> {
    return this.http.get<Faculty>(this.API_PATH, this.options);
  }

}
