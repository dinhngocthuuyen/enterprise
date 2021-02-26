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
 
  readonly ROOT_URL;
  coordinator !: Coordinator;
  coordinators !: Coordinator[];

  constructor(private http: HttpClient) {
    this.ROOT_URL = "http://localhost:3000";
  }
 getProfiles(uri: string): Observable<Coordinator[]> {
    return this.http.get<Coordinator[]>(`${this.ROOT_URL}/${uri}`, this.options);
  }
  // updateProfiles(changes:Partial<Coordinator>){
  //   // return this.http.patch<Coordinator>(`${this.ROOT_URL}/${id}`, this.options)
  //      return this.http.put<Coordinator>(this.ROOT_URL + '/' +  changes._id,changes, this.options)

  // }

  put(uri: string,changes:Partial<Coordinator> ){

    return this.http.put<Coordinator>(`${this.ROOT_URL}/${uri}${[changes._id]}`,changes, this.options)
  }

  // updateProfile(url: string, changes:Partial<Coordinator>) {
  //   const url = `${this.ROOT_URL}/${url}` + '.json';
  //   let body = JSON.stringify({language: language});

  //   return this.http.patch(url, body, httpOptions)
  //     .pipe(
  //       tap(_ => console.log(`updated user ${user_id} with this entry: ${language}`)),
  //       catchError(this.handleError)
  //     );
  // }
  get(uri: string){
    return this.http.get(`${this.ROOT_URL}/${uri}`)
  }

  post(uri: string, payload: Object ){
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload)
  }

  patch(uri: string, payload: Object ){
    return this.http.patch(`${this.ROOT_URL}/${uri}`, payload)
  }
  // put(uri: string, payload: Object ){
  //   return this.http.put(`${this.ROOT_URL}/${uri}`, payload, this.options)
  // }
  delete(uri: string){
    return this.http.delete(`${this.ROOT_URL}/${uri}`)
  }  
  // getcurrentData(id: string){
  //   return this.http.get(`${this.ROOT_URL}/${id}`)
  // }

  login(username: string, password: string){
    return this.http.post(`${this.ROOT_URL}/users/login`,{ username, password }, { observe: 'response' });
  }
}
