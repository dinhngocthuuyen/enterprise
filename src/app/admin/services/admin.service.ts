import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admin } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  API_PATH = "http://localhost:3000/admin"
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'mode': 'no-cors'
    }),
    //params: httpParam
  };
  admin !: Admin;
  admins !: Admin[];

  constructor(private http: HttpClient) {

  }

  getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.API_PATH, this.options);
  }
  getAdmin(): Observable<Admin> {
    return this.http.get<Admin>(this.API_PATH, this.options);
  }

}
