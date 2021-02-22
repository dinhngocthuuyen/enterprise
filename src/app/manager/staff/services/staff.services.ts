import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Staff } from "../models/staff.model";

@Injectable({
    providedIn: 'root'
  })
  export class StaffService {
    API_PATH = "http://localhost:3000/faculties"
    options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'mode': 'no-cors'
      }),
      //params: httpParam
    };
    staff!: Staff;
   staffs!: Staff[];
  
    constructor(private http: HttpClient,
       
        ) {
  
    }
  
    getStaffs(): Observable<Staff[]> {
      return this.http.get<Staff[]>(this.API_PATH, this.options);
    }
}