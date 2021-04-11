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
      return this.WebReqService.post(`sendMail`,data)
  }
  getUsename(id: string){
    return this.WebReqService.get(`sendMail/${id}`);
  }
  getCoor(id: string){
    return this.WebReqService.get(`${id}/coordinator`)
  }
  getMess( facultyId: string, id: string){
    return this.WebReqService.get(`messages/${facultyId}/${id}`);
  }
  postMess( facultyId: string, id: string, text, reply){
    return this.WebReqService.post(`messages/${facultyId}/${id}`, {text, reply})
  }

  getUpload(userId: string, topicId: string){
    return this.WebReqService.get(`upload/${userId}/${topicId}`);
  }
  deleteUpload(id: string) {
    return this.WebReqService.delete(`upload/remove/${id}`);
  }
  getClosure(facultyId: string, userId: string){
    return this.WebReqService.get(`closure/${facultyId}/${userId}`);
  }
  createContribution(userId: string, facultyId: string, topicId: string) {
    return this.WebReqService.post(`contribution`, {userId, facultyId, topicId});
  }
  
  getComments(contributionId: string) {
    return this.WebReqService.get(`${contributionId}/comments`)
  }

  getContribution(userId: string, topicId: string){
    return this.WebReqService.get(`contribution/${userId}/${topicId}`)
  }

  getDeadline(topicId: string){
    return this.WebReqService.get(`closure/${topicId}`)
  }
}
