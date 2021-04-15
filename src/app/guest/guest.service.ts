import { HttpClient } from "@angular/common/http";
import { WebRequestService } from "../shared/web-request.service";


export class StudentService {
  constructor(private WebReqService: WebRequestService, private http: HttpClient) {}

  getUser(id: string){
    return this.WebReqService.get(`user/${id}`);
  }

  getFaculty(){
    return this.WebReqService.get(`faculty`);
  }

  getContributions(facultyId: string){
    return this.WebReqService.get(`coordinator/${facultyId}/contributions`);
  }

  // getApprovedCs(facultyId: string, topicId){
  //   return this.WebReqService.get(`approved/${facultyId}/contributions/${topicId}`);
  // }
}
