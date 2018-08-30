import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
import { Task } from "~/@shared/viewModels/taskViewModel/taskViewModel";



@Injectable()
export class TaskService {
  private serverUrl = "http://192.168.14.82/api/Tasks";
  routerExtensions: any;
    data:any[];
  constructor(private http: HttpClient) { }

  CreteTask(task:Task){
    console.log("tap new task");
    const req = this.http.post(`${this.serverUrl}/PostTask`, {

        Name : task.Name,
        Description : task.Description,
        Latitude : task.Latitude,
        Longitude : task.Longitude,
        Radius : task.Radius,
        Created: task.Created,
        LastUpdate: task.LastUpdate,
}).subscribe(res => {
    console.log(res);
    console.log("success!");
});
err => {
    console.log("Error occured " + " status: " + Response.error);
}
}


getAllTasks() {
    return  this.http.get(`${this.serverUrl}/GetTasks`) ;

}



}
    
//     subscribe((res =>
//     console.log("success" , res)
//    ), err => {
//     console.log("Error occured " + " status: " + Response.error);
//   });

