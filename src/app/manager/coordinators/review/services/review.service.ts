import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contribution } from 'src/app/models';
import { WebRequestService } from 'src/app/shared/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  API_PATH = "http://localhost:3000/contributions"

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
    return this.http.get<Contribution>(this.API_PATH , this.options);
  }

  getPendings(): Observable<Contribution[]> {
    return this.http.get<Contribution[]>(this.API_PATH, this.options);
  }
  getPending(): Observable<Contribution> {
    return this.http.get<Contribution>(this.API_PATH, this.options);
  }

  // constructor(private WebReqService: WebRequestService) {}

  // getReviews(){
  //   return this.WebReqService.get('reviews');
  // }
  // getReview(){
  //   return this.WebReqService.get('reviews/:_id');
  // }
}
