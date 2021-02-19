import { Injectable } from '@angular/core';
import { WebRequestService } from 'src/app/pages/guest/service/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private WebReqService: WebRequestService) {}


  getUser(id: string){
    return this.WebReqService.get(`user/${id}`);
  }
  getUsers(){
    return this.WebReqService.get(`users`);
  }
}
