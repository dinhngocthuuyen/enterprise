import { Injectable } from '@angular/core';
import { WebRequestService } from 'src/app/shared/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private WebReqService: WebRequestService) {}


  getProfile(id: string){
    return this.WebReqService.get(`profile/profile-detail/${id}`);
  }
  updateProfile(id: string, body ) {
   return this.WebReqService.patch(`profile/${id}`, body);
  }
}
