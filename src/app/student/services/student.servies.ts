import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contribution } from 'src/app/models';
import { WebRequestService } from 'src/app/shared/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private WebReqService: WebRequestService) {}

  getUser(id: string){
    return this.WebReqService.get(`user/${id}`);
  }

  getUsers(){
    return this.WebReqService.get(`users`)
  }
  sendMail(data){
      return this.WebReqService.post(`sendMail`,data)
  }
  getUsename(id: string){
    return this.WebReqService.get(`sendMail/${id}`);
  }

}
