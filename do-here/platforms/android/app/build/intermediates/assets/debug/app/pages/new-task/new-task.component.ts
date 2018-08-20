import { Component, OnInit } from '@angular/core';
import { Task } from '~/@shared/viewModels/taskViewModel/taskViewModel';
import { isEnabled, enableLocationRequest, getCurrentLocation, watchLocation, distance, clearWatch } from "nativescript-geolocation";

@Component({
  moduleId: module.id,
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  task:Task;

  constructor() {
    this.task= new Task();
   }

  ngOnInit() { }
    create(){
      console.log(this.task.Name);
      console.log(this.task.Description);
    }

    
  }