
import { Injectable } from "@angular/core";
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor} from '@angular/common/http';
import { AuthGuard } from './auth-guard.service';
import { Observable } from "../../../node_modules/rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(public auth: AuthGuard){}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // const authToken = appSettings.getString('token');
      // console.log("token is  "+authToken);

      //   request = request.clone({
      //       setHeaders: {
      //         Authorization: `Bearer ${appSettings.getString('token')}`
      //       }
      //     });
      console.log("intercepted", request);
          return next.handle(request);
        }
}