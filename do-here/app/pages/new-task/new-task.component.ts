import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '~/@shared/viewModels/taskViewModel/taskViewModel';
import { RouterExtensions } from 'nativescript-angular/router';
import { MapComponent } from '../map/map.component';
import { LatLng } from '~/@shared/viewModels/positionModel/latLng.model';
import { PARAMETERS } from '../../../node_modules/@angular/core/src/util/decorators';
import { ActivatedRoute, Router } from '@angular/router';
import { parse } from '../../../node_modules/tns-core-modules/css/reworkcss';
import { TaskService } from '~/@shared/services/task.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
      this.task.Latitude = params.lat,
      this.task.Longitude = params.lng
    });

    // this.form = this.fb.group({
    //   "Name": [{ value: null, disabled: false }, Validators.compose([Validators.required, Validators.minLength(3)])],
    //   "Description": [{ value: null, disabled: false }],
    //   "Latitude": [{ value: null, disabled: false }, Validators.compose([Validators.required])],
    //   "Longitude": [{ value: null, disabled: false }, Validators.compose([Validators.required])],
    //   "Radius": [{ value: 100, disabled: false }],
    //   "StartTime": [{ value: new Date(), disabled: false }],
    // })  

  }
  
  
   createNewTask(){

      console.log(this.task.Name);
      console.log(this.task.Description);
      console.log(this.task.Latitude);

      console.log(this.task.Longitude);
      console.log(this.task.Radius);
      this.TaskServise.CreteTask(this.task);
      this.routerExtensions.navigate(["../task-list"]);

   }

    moveToMap(){
      console.log("tap to map");
        this.routerExtensions.navigate(["../map"]);
    }
    beck(){
      this.routerExtensions.navigate(["../task-list"]);
  
    }

    
  }