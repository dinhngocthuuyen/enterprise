import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { WebRequestService } from "../shared/web-request.service";

@Injectable({
  providedIn: 'root'
})

export class GuestService {
  constructor(private WebReqService: WebRequestService, private http: HttpClient) {}

  getUser(id: string){
    return this.WebReqService.get(`user/${id}`);
  }

  getFaculty(id: string){
    return this.WebReqService.get(`faculty/${id}`);
  }

  getAllCons(){
    return this.WebReqService.get('contributions');
  }

  getContributions(id: string){
    return this.WebReqService.get(`guest/contributions/${id}`);
  }
  // getApprovedCs(facultyId: string, topicId){
  //   return this.WebReqService.get(`approved/${facultyId}/contributions/${topicId}`);
  // }
  getConsByMonth(month: number){
    return this.WebReqService.get(`getMonth/contributions/${month}`)
  }
}
