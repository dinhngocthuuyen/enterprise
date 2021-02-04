import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private WebReqService: WebRequestService) {}

  viewPostService(){
    return this.WebReqService.get('post');
  }

  //createGuestService(title: String, post: String){
    ////Send a request to create a post
    //return this.WebReqService.post('post', {title, post});
  //}
}
