import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coordinator } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  API_PATH = "http://localhost:3000/profiles"
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'mode': 'no-cors'
    }),
    //params: httpParam
  };
  coordinator !: Coordinator;
  coordinators !: Coordinator[];

  constructor(private http: HttpClient) {

  }

  getProfiles(): Observable<Coordinator[]> {
    return this.http.get<Coordinator[]>(this.API_PATH, this.options);
  }
  getProfile(): Observable<Coordinator> {
    return this.http.get<Coordinator>(this.API_PATH, this.options);
  }

 
}
