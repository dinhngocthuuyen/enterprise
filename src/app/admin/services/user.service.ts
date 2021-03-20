import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'db/models';
import { WebRequestService } from 'src/app/shared/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_PATH = "http://localhost:3000/users"
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'mode': 'no-cors'
    }),
    //params: httpParam
  };
  user !: User;
  users !: User[];

  constructor(private http: HttpClient, private WebReqService: WebRequestService) {

  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.API_PATH, this.options);
  }
  getUser(): Observable<User> {
    return this.http.get<User>(this.API_PATH, this.options);
  }

  // getUpload(username: string, name: string, role: string, facultyId: string){
  //   return this.WebReqService.get(`upload/${username}/${name}/${role}/${facultyId}`);
  // }

  deleteUser(id: string) {
    return this.WebReqService.delete(`users/${id}`);
  }

}
