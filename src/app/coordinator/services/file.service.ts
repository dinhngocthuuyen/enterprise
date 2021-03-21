import { Injectable } from '@angular/core';
import { WebRequestService } from 'src/app/shared/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private WebRequestService:WebRequestService) { }

  getUpload(facultyId){
    return this.WebRequestService.get(`upload/${facultyId}`);
  }
}
