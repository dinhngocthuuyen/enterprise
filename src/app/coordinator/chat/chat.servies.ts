import { Injectable } from '@angular/core';
import { WebRequestService } from '../../shared/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private WebRequestService: WebRequestService) {}

  postMess(text: string, date:string, _userId: String,reply:boolean ){
    return this.WebRequestService.post('chat',{text, date, _userId, reply});
  }
  getMess(){
    return this.WebRequestService.get('chat');
  }
  //createGuestService(title: String, post: String){
    ////Send a request to create a post
    //return this.WebReqService.post('post', {title, post});
  //}

  
}
