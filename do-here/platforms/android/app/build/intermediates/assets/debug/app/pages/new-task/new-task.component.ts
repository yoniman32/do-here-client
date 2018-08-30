import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '~/@shared/viewModels/taskViewModel/taskViewModel';
import { RouterExtensions } from 'nativescript-angular/router';
import { MapComponent } from '../map/map.component';
import { LatLng } from '~/@shared/viewModels/positionModel/latLng.model';
import { PARAMETERS } from '../../../node_modules/@angular/core/src/util/decorators';
import { ActivatedRoute, Router } from '@angular/router';
import { parse } from '../../../node_modules/tns-core-modules/css/reworkcss';
import { TaskService } from '~/@shared/services/task.service';

@Component({
  moduleId: module.id,
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  task:Task;
  sub: any;

  constructor(private TaskServise : TaskService ,private routerExtensions: RouterExtensions, private route: ActivatedRoute,   private router: Router  ) {
    this.task= new Task();

   }

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.task.latitude = JSON.stringify(params.lat),
        this.task.longitude = JSON.stringify(params.lng)
      });
     }
    
   
   createNewTask(){
      console.log(this.task.Name);
      console.log(this.task.Description);
      console.log(this.task.latitude);
      console.log(this.task.longitude);
      this.TaskServise.submit(this.task);
   }

    moveToMap(){
      console.log("tap to map");
        this.routerExtensions.navigate(["../map"]);
    }
    beck(){
      this.routerExtensions.navigate(["../task-list"]);
  
    }
  }