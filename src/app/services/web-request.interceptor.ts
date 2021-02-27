import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { empty, Observable, throwError } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class WebRequestInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  refreshingAccessToken!: boolean;

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    //Handle the request
    request = this.addAuthHeader(request);
    //Call next() and handle the response
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.status === 401 && !this.refreshingAccessToken) {
          //Refresh access token
          return this.refreshAccessToken().pipe(
            switchMap(() => {
              request = this.addAuthHeader(request);
              return next.handle(request);
            }),
            catchError((error: any) => {
              console.log(error);
              this.authService.logout();
              return empty();
            })
          )
        }
        return throwError(error);       
      })
    )
  }

  refreshAccessToken(){
    this.refreshingAccessToken = true;
    //Call a method in AuthService to send a request to refresh the access token
    return this.authService.getNewAccessToken().pipe(
      tap(() => {
        console.log('Access Token Refreshed')
      })
    )
  }

  addAuthHeader(request: HttpRequest<any>) {
    //Get access token
    const token = this.authService.getAccessToken();
    if (token) {
    //Append the access token to the request header
      return request.clone({
        setHeaders: {
          'x-access-token': token
        }
      })
    }
    return request;
  }
}

