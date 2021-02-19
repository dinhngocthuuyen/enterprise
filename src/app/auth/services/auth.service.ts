import { Injectable } from '@angular/core';
import { WebRequestService } from 'src/app/pages/guest/service/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private WebReqService: WebRequestService) {}

  signup(username: string, password: string){
    return this.WebReqService.post('users',
    {
      username: username,
      password: password
    });
  }


}
