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
  getUser(id: string){
    return this.WebReqService.get(`user/${id}`);
  }
  getContributionDetail(id: string){
    return this.WebReqService.get(`contribution/${id}`)
  }
  getUsers(){
    return this.WebReqService.get(`users`)
  }
}
