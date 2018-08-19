import { Component, OnInit } from '@angular/core';
import { Task } from '~/@shared/viewModels/taskViewModel/taskViewModel';

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
    console.log(this.task.Name)
  }
}
