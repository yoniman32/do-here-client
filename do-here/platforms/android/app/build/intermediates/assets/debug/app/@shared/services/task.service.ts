import { Injectable } from "@angular/core";
import { User } from "../viewModels/userViewModel/userViewModel";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from "~/@shared/viewModels/taskViewModel/taskViewModel";
import { Inter } from '~/@shared/services/inter'
const appSettings = require("application-settings");


@Injectable()
export class TaskService {
  private serverUrl = "http://192.168.14.82/api/Tasks";
  routerExtensions: any;
  constructor(private http: HttpClient) { }

submit(task:Task){
    const req = this.http.post(`${this.serverUrl}/PostTask`, {
        name : task.Name,
        description : task.Description,
        latitude : task.latitude,
        longitude : task.longitude,
        startTime : task.startTime,
        endTime : task.endTime,
        radius : task.radius      
}).subscribe(res => {
    console.log(res);
    console.log("success!");
    
      
});err => {
    console.log("Error occured " + " status: " + Response.error);
}
}
}