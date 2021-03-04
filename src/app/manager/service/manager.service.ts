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

  //createGuestService(title: String, post: String){
    ////Send a request to create a post
    //return this.WebReqService.post('post', {title, post});
  //}

//   getPostDetail(id: string){
//     return this.WebRequestService.get(`guest/guest-detail/${id}`);
//   }
}
