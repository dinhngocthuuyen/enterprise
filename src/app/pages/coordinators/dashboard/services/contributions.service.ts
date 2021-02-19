import { Injectable } from '@angular/core';
import { WebRequestService } from 'src/app/pages/guest/service/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class ContributionsService {

  constructor(private WebReqService: WebRequestService) {}

  getCoordinators(){
    return this.WebReqService.get('coordinators');
  }
  getTotalContribution(){
    return this.WebReqService.get('countcontributions');
  }
  getContributions(coordinatorId: string){
    return this.WebReqService.get(`coordinators/${coordinatorId}`);
  }
}
