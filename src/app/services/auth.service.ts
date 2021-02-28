import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { Router } from '@angular/router';
import { empty, Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';
import { WebRequestService } from '../shared/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private webRequestService: WebRequestService, private router: Router, private http: HttpClient) { }

  login(username: string, password: string) {
    return this.webRequestService.login(username, password).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        //The auth tokens will be in the header of this response
        this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
        console.log('LOGGED IN!!!');
        localStorage.setItem('userId', res.body._id);
        localStorage.setItem('facultyId', res.body._facultyId);
      })
    )
  }

  create(username: string, name: string, password: string, role: string, _facultyId: string) {
    return this.webRequestService.create(username, name, password, role, _facultyId).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        //The auth tokens will be in the header of this response
        this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
        console.log('CREATE SUCCESSFULLY!!!');
      })
    )
  }

  submit(startdate: Date, deadline1:Date, deadline2: Date) {
    return this.webRequestService.submit(startdate, deadline1, deadline2).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        //The auth tokens will be in the header of this response
        this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
        console.log('SUBMIT SUCCESSFULLY!!!');
      })
    )
  }

  private setSession(id: string, accessToken, refreshToken){
    localStorage.setItem('id', id);
    localStorage.setItem('x-access-token', accessToken);
    localStorage.setItem('x-refresh-token', refreshToken);
  }

  logout() {
    this.removeSession();
    this.router.navigate(['/login']);
  }

  private removeSession() {
    localStorage.clear();
  }

  getAccessToken() {
    return localStorage.getItem('x-access-token');
  }

  getRefreshToken() {
    return localStorage.getItem('x-refresh-token');
  }

  setAccessToken(accessToken) {
    return localStorage.setItem('x-access-token', accessToken);
  }

  getUserId() {
    return localStorage.getItem('id');
  }

  getNewAccessToken() {
    return this.http.get(`${this.webRequestService.ROOT_URL}/users/me/access-token`,{
      headers: {
        'x-refresh-token': this.getRefreshToken(),
        '_id': this.getUserId()
      },
      observe: 'response'
    }).pipe(
      tap((res: HttpResponse<any>) => {
        this.setAccessToken(res.headers.get('x-access-token'))
      })
    )
  }

}
