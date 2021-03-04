import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contribution } from 'src/app/models';
import { WebRequestService } from 'src/app/shared/web-request.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  constructor(private WebReqService: WebRequestService, private http: HttpClient) {}

  getUser(id: string){
    return this.WebReqService.get(`user/${id}`);
  }

  getUsers(){
    return this.WebReqService.get(`users`)
  }
  sendMail(data){
      return this.WebReqService.post(`student`,data)
  }
  getUsename(id: string){
    return this.WebReqService.get(`sendMail/${id}`);
  }
  getCoor(id: string){
    return this.WebReqService.get(`${id}/coordinator`)
  }
  getMess(id: string){
    return this.WebReqService.get(`messages/${id}`);
  }
  postMess(id: string, text){
    return this.WebReqService.post(`messages/${id}`, {text})
  }

  getUpload(){
    return this.WebReqService.get('upload');
  }
  viewUpload(filename: string){
    return this.WebReqService.get(`upload/image/${filename}`);
  }
  deleteUpload(id: string) {
    return this.WebReqService.delete(`upload/${id}`);
  }
}
