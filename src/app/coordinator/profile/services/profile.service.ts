import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Coordinator } from 'src/app/models';
import { CoordinatorComponent } from '../../coordinator.component';
import { CoordinatorModule } from '../../coordinator.module';
import { WebRequestService } from 'src/app/shared/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  @Input()
  coordinator!: Coordinator ;
  // API_PATH = "http://localhost:3000"
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'mode': 'no-cors'
    }),
    //params: httpParam
  };
  // coordinator !: Coordinator;
  // coordinators !: Coordinator[];


  // constructor(private http: HttpClient) {
  // }

  // getProfiles(): Observable<Coordinator[]> {
  //   return this.http.get<Coordinator[]>(this.ROOT_URL, this.options);
  // }
  // getProfile(): Observable<Coordinator> {
  //   return this.http.get<Coordinator>(this.ROOT_URL, this.options);
  // }
  // updateProfiles(changes:Partial<Coordinator>){
  //   return this.http.put<Coordinator>(this.ROOT_URL + '/' +  changes._id,changes, this.options)
  // }
    readonly ROOT_URL;

  constructor(
    private WebRequestService: WebRequestService,

    ) {    this.ROOT_URL = "http://localhost:3000"
  }

//   update = {
//     id: this.coordinator._id,
//     changes: this.coordinator.name,
// }
  getProfiles(){
    return this.WebRequestService.getProfiles(`coordinators`);
  }

    updateProfiles(changes:Partial<Coordinator> ){
    return this.WebRequestService.updateProfiles(`coordiantors`,{})
  }

  // updateProfiles(_id:string, name: string,address: string,phone: number, dob: Date, email: string  ){
  //   return this.WebRequestService.updateProfiles(`coordiantors`,  {_id,name,address,phone, dob, email})
  // }
  //createGuestService(title: String, post: String){
    ////Send a request to create a post
    //return this.WebReqService.post('post', {title, post});
  //}
  // updateProfiles(changes:Partial<Coordinator>){
  //   return this.WebRequestService.updateProfiles(`coordinators/profile/${_id}`);
  // }
}
