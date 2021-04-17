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
  getContribution(facultyId: string, topicId){
    return this.WebReqService.get(`coordinator/${facultyId}/topic/${topicId}`);
  }
  getContributions(facultyId: string){
    return this.WebReqService.get(`coordinator/${facultyId}/contributions`);
  }
  getPendingCs(facultyId: string, topicId){
    return this.WebReqService.get(`pending/${facultyId}/contributions/${topicId}`);
  }
  getApprovedCs(facultyId: string, topicId){
    return this.WebReqService.get(`approved/${facultyId}/contributions/${topicId}`);
  }
  getUser(id: string){
    return this.WebReqService.get(`user/${id}`);
  }
  getContributionDetail(id: string){
    return this.WebReqService.get(`contribution/${id}`);
  }
  getUsers(){
    return this.WebReqService.get(`users`);
  }
  updateStatus(id: string, status: string) {
    return this.WebReqService.patch(`contributions/${id}`, {status});
  }
  postComment(conId: string, comment: string) {
    return this.WebReqService.post(`${conId}/comments`, {comment});
  }
  getComments(conId: string) {
    return this.WebReqService.get(`${conId}/comments`);
  }
  getMess( facultyId: string, id: string){
    return this.WebReqService.get(`messages/${facultyId}/${id}`);
  }
  postMess( facultyId: string, id: string, text, reply){
    return this.WebReqService.post(`messages/${facultyId}/${id}`, {text, reply});
  }
  getProfile(id: string){
    return this.WebReqService.get(`profile/profile-detail/${id}`);
  }
  getFaculty(id: string){
    return this.WebReqService.get(`faculty/${id}`);
  }
   updateProfile(id: string, body ) {
    return this.WebReqService.patch(`profile/${id}`, body);
  }
  getStudents(id: string){
    return this.WebReqService.get(`${id}/students`);
  }
  getMonth(facultyId: string){
    return this.WebReqService.get(`getMonth/${facultyId}/contributions`);
  }
  getYear(facultyId: string, cyear: number){
    return this.WebReqService.get(`getYear/${facultyId}/contributions/${cyear}`);
  }
  changePassword(id: string,body){
    return this.WebReqService.patch(`profile/${id}`,body );
  }
  getStudentId(id: string){
    return this.WebReqService.get(`contribution/studentId/${id}`);
  }
  
}
