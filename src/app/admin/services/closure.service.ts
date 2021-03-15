import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Closure } from 'db/models';

@Injectable({
  providedIn: 'root'
})
export class ClosureService {
  API_PATH = "http://localhost:3000/closure"
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'mode': 'no-cors'
    }),
    //params: httpParam
  };
  closure !: Closure;
  closures !: Closure[];

  constructor(private http: HttpClient) {

  }

  getClosures(): Observable<Closure[]> {
    return this.http.get<Closure[]>(this.API_PATH, this.options);
  }
  getClosure(): Observable<Closure> {
    return this.http.get<Closure>(this.API_PATH, this.options);
  }

}
