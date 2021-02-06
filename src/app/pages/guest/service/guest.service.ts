import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private WebReqService: WebRequestService) {}

  getPost(){
    return this.WebReqService.get('guest');
  }

  //createGuestService(title: String, post: String){
    ////Send a request to create a post
    //return this.WebReqService.post('post', {title, post});
  //}

  getPostDetail(id: string){
    return this.WebReqService.get(`guest/guest-detail/${id}`);
  }
}
