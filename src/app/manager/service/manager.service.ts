import { Injectable } from '@angular/core';
import { WebRequestService } from '../../shared/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class ViewProfile {

  constructor(private WebRequestService: WebRequestService) {}

  getPost(){
    return this.WebRequestService.get('viewprofile');
  }
  getviewcoordinator(){
    return this.WebRequestService.get('viewcoor');
  }
  
}


@Injectable({
  providedIn: 'root'
})
export class ViewDetail {

  constructor(private WebRequestService: WebRequestService) {}
  getviewdetail(id: string){
    return this.WebRequestService.get(`viewdetail/${id}`);
}
}