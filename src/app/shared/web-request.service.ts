import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Coordinator } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {
 
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'mode': 'no-cors'
    }),
    // params: httpParam
  };
  readonly payLoad = {
    offset: 0
  };
  readonly ROOT_URL;


  constructor(private http: HttpClient) {
    this.ROOT_URL = "http://localhost:3000";
  }

 getProfiles(uri: string): Observable<Coordinator[]> {
    return this.http.get<Coordinator[]>(`${this.ROOT_URL}/${uri}`);
  }
  // updateProfiles(changes:Partial<Coordinator>){
  //   // return this.http.patch<Coordinator>(`${this.ROOT_URL}/${id}`, this.options)
  //      return this.http.put<Coordinator>(this.ROOT_URL + '/' +  changes._id,changes, this.options)

  // }

  updateProfiles(uri: string,changes:Partial<Coordinator> ){
    // return this.http.patch<Coordinator>(this.ROOT_URL + {uri} +  changes._id,changes,  this.options)
    return this.http.patch(`${this.ROOT_URL}/${uri}/`+ changes._id,changes, this.options)

  }
  get(uri: string){
    return this.http.get(`${this.ROOT_URL}/${uri}`)
  }


  post(uri: string, payload: Object ){
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload)
  }

  patch(uri: string, payload: Object ){
    return this.http.patch(`${this.ROOT_URL}/${uri}`, payload)
  }

  delete(uri: string){
    return this.http.delete(`${this.ROOT_URL}/${uri}`)
  }

  login(username: string, password: string){
    return this.http.post(`${this.ROOT_URL}/users/login`,{ username, password }, { observe: 'response' });
  }

  create(username: string, name: string, password: string, role: string, _facultyId: string){
    //const username: string = email.split("@")[0];
    return this.http.post(`${this.ROOT_URL}/users/`,{ username, name, password, role, _facultyId }, { observe: 'response' });
  }

  submit(topic: String, startdate: String, deadline1:String, deadline2: String){
    return this.http.post(`${this.ROOT_URL}/closure/`,{ topic, startdate, deadline1, deadline2}, { observe: 'response' });
  }

  update(topic: String, startdate: String, deadline1:String, deadline2: String){
    return this.http.post(`${this.ROOT_URL}/closure/`,{ topic, startdate, deadline1, deadline2}, { observe: 'response' });
  }

  getDepDropDownValues():Observable<any> {
    return this.http.get<Account[]>(`${this.ROOT_URL}/account`);
  }

  
}
