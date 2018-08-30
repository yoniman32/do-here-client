
import { Injectable } from "@angular/core";
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor} from '@angular/common/http';
import { AuthGuard } from './auth-guard.service';
import { Observable } from "../../../node_modules/rxjs";
const appSettings = require("application-settings");

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(auth :AuthGuard){}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(request.url != 'http://192.168.14.82/api/Users/PostUser' && request.url !='http://192.168.14.82/token' ){

        const authToken = appSettings.getString('token');
        request = request.clone({
          setHeaders: {
            Authorization: `bearer `+authToken
          }
        });
        console.log("intercepted", request);
      }
      return next.handle(request);
    }
  }