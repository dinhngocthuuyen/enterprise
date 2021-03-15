import { Injectable } from '@angular/core';
import { WebRequestService } from 'src/app/shared/web-request.service';


@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private WebRequestService:WebRequestService) { }
 
  createTopic(title, deadline1, deadline2){
    return this.WebRequestService.post('topic', {title, deadline1, deadline2});
  }
}
