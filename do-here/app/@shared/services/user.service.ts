import { Injectable } from "@angular/core";
import { User } from "../viewModels/userViewModel/userViewModel";
import { HttpClient, HttpHeaders } from '@angular/common/http';
const appSettings = require("application-settings");


@Injectable()
export class UserService {
  private serverUrl = "http://192.168.14.82/api/Users";
  private TokenUrl = "http://192.168.14.82/token";
  routerExtensions: any;
  constructor(private http: HttpClient) { }

  register(user: User) {
    console.log("you are going to use " + user.email + " as your Email");
    debugger;

    const req = this.http.post(`${this.serverUrl}/PostUser`, {
      username: user.email,
      email: user.email,
      password: user.password
      
    }).subscribe(res => {
      console.log(res);
      console.log("success!");
      var headers: HttpHeaders = new HttpHeaders();
      headers.set('Content-Type', 'application/x-www-urlencoded');
      const tokenReq = this.http.post(this.TokenUrl,
        //  '{"grant_type=password&username="'+user.email+'"&password="'+user.password+'}'
        `grant_type=password&username=${user.email}&password=${user.password}`,
        { headers: headers }

      ).subscribe((res: any) => {
        console.log('/token - Success', res);
        appSettings.setString("token", res.access_token);
      }, err => {
        console.error('/token - Error', err)
      })
    }, err => {
      console.log("Error occured " + " status: " + Response.error);
    }
    );
      // if(Response!=null){
      //   this.routerExtensions.navigate(["./login"]);
      // }

  }

  //  login(user:User){
  //  const req = this.http.get(this.serverUrl+"/GetUserById",)
  //  }
}
