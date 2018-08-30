import { Component, OnInit, ViewChild, Input, NgZone } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Task } from '~/@shared/viewModels/taskViewModel/taskViewModel';
import { TaskService } from '~/@shared/services/task.service';
import { UserService } from '~/@shared/services/user.service';
const appSettings = require("application-settings");


@Component({
  moduleId: module.id,
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  public userTaskList: any;
  constructor(private userService :UserService, private taskService: TaskService, private routerExtensions: RouterExtensions, private zone: NgZone) {
    this.userTaskList = [];
  }

  ngOnInit() {
    this.taskService.getAllTasks().toPromise().then(res => {
      this.userTaskList=res;
      // this.zone.run(()=>{})
      console.log("data is here ! ==>>> ", this.userTaskList);
    })

  }


  submit() {
    console.log("tap");
    this.routerExtensions.navigate(["../new-task"]);
  }
  logOut() {
    this.routerExtensions.navigate(["../login"]);

  }

  Tokenv() {
    const authToken = appSettings.getString('token');
    var dialogs = require("ui/dialogs");
    dialogs.alert({
       title: "Token",
       message:authToken,
       okButtonText: "Ok"
      }).then(function () {
        console.log("Dialog closed!");
   });
    // this.userService.tokenRef();
  }


  onItemTap(data){
  // alert(name.Description)
  // prompt(name.Description)
  var dialogs = require("ui/dialogs");
    dialogs.alert({
      title: data.Name,
      message: data.Description,
      okButtonText: "Ok"
      }).then(function () {
        console.log("Dialog closed!");
   });
  
  }

}
