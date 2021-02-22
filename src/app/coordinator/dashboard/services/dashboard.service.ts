import { Injectable } from '@angular/core';
import { WebRequestService } from 'src/app/shared/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

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
  getUser(id: string){
    return this.WebReqService.get(`user/${id}`);
  }
}
