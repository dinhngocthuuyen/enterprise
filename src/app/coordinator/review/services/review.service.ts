import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contribution } from 'src/app/models';
import { WebRequestService } from 'src/app/shared/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  constructor(private WebReqService: WebRequestService) {}
  getContributions(){}
}
