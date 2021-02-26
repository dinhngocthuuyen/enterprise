import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contribution } from 'src/app/models';
import { WebRequestService } from 'src/app/shared/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class CoorService {
  constructor(private WebReqService: WebRequestService) {}
  getContributions(facultyId: string){
    return this.WebReqService.get(`coordinator/${facultyId}/contributions`);
  }
  getPendingCs(facultyId: string){
    return this.WebReqService.get(`pending/${facultyId}/contributions`);
  }
  getApprovedCs(facultyId: string){
    return this.WebReqService.get(`approved/${facultyId}/contributions`);
  }
  getUser(id: string){
    return this.WebReqService.get(`user/${id}`);
  }
  getContributionDetail(id: string){
    return this.WebReqService.get(`contribution/${id}`)
  }
  getUsers(){
    return this.WebReqService.get(`users`)
  }
  updateStatus(id: string, status: string) {
    return this.WebReqService.patch(`contributions/${id}`, {status})
  }
  postComment(conId: string, comment: string) {
    return this.WebReqService.post(`${conId}/comments`, {comment})
  }
  getComments(conId: string) {
    return this.WebReqService.get(`${conId}/comments`)
  }
  postMess(text: string, userName: string, _userId: string ){
    return this.WebReqService.post('chat',{text, userName, _userId});
  }
  getMess(){
    return this.WebReqService.get('chat');
  }
  getProfile(id: string){
    return this.WebReqService.get(`profile/profile-detail/${id}`);
  }
  getFaculty(id: string){
    return this.WebReqService.get(`faculty/${id}`);
  }
  updateProfile(id: string, body ) {
    return this.WebReqService.patch(`profile/${id}`, body)
  }
}
