import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contribution } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  API_PATH = "http://localhost:3000/reviews"
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'mode': 'no-cors'
    }),
    //params: httpParam
  };
  contribution !: Contribution;
  contributions !: Contribution[];

  constructor(private http: HttpClient) {

  }

  getReviews(): Observable<Contribution[]> {
    return this.http.get<Contribution[]>(this.API_PATH, this.options);
  }
  getReview(): Observable<Contribution> {
    return this.http.get<Contribution>(this.API_PATH, this.options);
  }

}
