import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Closure } from 'db/models';
import { WebRequestService } from 'src/app/shared/web-request.service';

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

  constructor(private http: HttpClient, private WebReqService: WebRequestService) {

  }

  getClosures(): Observable<Closure[]> {
    return this.http.get<Closure[]>(this.API_PATH, this.options);
  }

  getClosure(): Observable<Closure> {
    return this.http.get<Closure>(this.API_PATH, this.options);
  }

  updateClosure(id: string, startdate: any, deadline1: any, deadline2: any, _facultyId: string) {
    return this.WebReqService.patch(`closure/${id}`, { startdate, deadline1, deadline2, _facultyId });
  }

  deleteClosure(id: string) {
    return this.WebReqService.delete(`closure/${id}`);
  }

  editClosure(id: string, startdate: string, deadline1: string, deadline2: string){
    return this.WebReqService.patch(`closure/${id}`, {startdate, deadline1, deadline2});
  }

}
