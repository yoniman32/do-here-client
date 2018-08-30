"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var taskViewModel_1 = require("~/@shared/viewModels/taskViewModel/taskViewModel");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var task_service_1 = require("~/@shared/services/task.service");
var NewTaskComponent = /** @class */ (function () {
    function NewTaskComponent(TaskServise, routerExtensions, route, router) {
        this.TaskServise = TaskServise;
        this.routerExtensions = routerExtensions;
        this.route = route;
        this.router = router;
        this.task = new taskViewModel_1.Task();
    }
    NewTaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route
            .queryParams
            .subscribe(function (params) {
            _this.task.Latitude = params.lat,
                _this.task.Longitude = params.lng;
        });
        // this.form = this.fb.group({
        //   "Name": [{ value: null, disabled: false }, Validators.compose([Validators.required, Validators.minLength(3)])],
        //   "Description": [{ value: null, disabled: false }],
        //   "Latitude": [{ value: null, disabled: false }, Validators.compose([Validators.required])],
        //   "Longitude": [{ value: null, disabled: false }, Validators.compose([Validators.required])],
        //   "Radius": [{ value: 100, disabled: false }],
        //   "StartTime": [{ value: new Date(), disabled: false }],
        // })  
    };
    NewTaskComponent.prototype.createNewTask = function () {
        console.log(this.task.Name);
        console.log(this.task.Description);
        console.log(this.task.Latitude);
        console.log(this.task.Longitude);
        console.log(this.task.Radius);
        this.TaskServise.CreteTask(this.task);
        this.routerExtensions.navigate(["../task-list"]);
    };
    NewTaskComponent.prototype.moveToMap = function () {
        console.log("tap to map");
        this.routerExtensions.navigate(["../map"]);
    };
    NewTaskComponent.prototype.beck = function () {
        this.routerExtensions.navigate(["../task-list"]);
    };
    NewTaskComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-new-task',
            templateUrl: './new-task.component.html',
            styleUrls: ['./new-task.component.scss']
        }),
        __metadata("design:paramtypes", [task_service_1.TaskService, router_1.RouterExtensions, router_2.ActivatedRoute, router_2.Router])
    ], NewTaskComponent);
    return NewTaskComponent;
}());
exports.NewTaskComponent = NewTaskComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LXRhc2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmV3LXRhc2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStFO0FBQy9FLGtGQUF3RTtBQUN4RSxzREFBK0Q7QUFJL0QsMENBQXlEO0FBRXpELGdFQUE4RDtBQVM5RDtJQUlFLDBCQUFvQixXQUF5QixFQUFVLGdCQUFrQyxFQUFVLEtBQXFCLEVBQVksTUFBYztRQUE5SCxnQkFBVyxHQUFYLFdBQVcsQ0FBYztRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFZLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDaEosSUFBSSxDQUFDLElBQUksR0FBRSxJQUFJLG9CQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUFBLGlCQWlCQztRQWhCQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLO2FBQ3BCLFdBQVc7YUFDWCxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2YsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLEdBQUc7Z0JBQy9CLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUE7UUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFFSCw4QkFBOEI7UUFDOUIsb0hBQW9IO1FBQ3BILHVEQUF1RDtRQUN2RCwrRkFBK0Y7UUFDL0YsZ0dBQWdHO1FBQ2hHLGlEQUFpRDtRQUNqRCwyREFBMkQ7UUFDM0QsT0FBTztJQUVULENBQUM7SUFHQSx3Q0FBYSxHQUFiO1FBRUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFFcEQsQ0FBQztJQUVBLG9DQUFTLEdBQVQ7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCwrQkFBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFFbkQsQ0FBQztJQWhEUSxnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3pDLENBQUM7eUNBS2tDLDBCQUFXLEVBQTRCLHlCQUFnQixFQUFpQix1QkFBYyxFQUFvQixlQUFNO09BSnZJLGdCQUFnQixDQW1EMUI7SUFBRCx1QkFBQztDQUFBLEFBbkRILElBbURHO0FBbkRVLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhc2sgfSBmcm9tICd+L0BzaGFyZWQvdmlld01vZGVscy90YXNrVmlld01vZGVsL3Rhc2tWaWV3TW9kZWwnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAvbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXRMbmcgfSBmcm9tICd+L0BzaGFyZWQvdmlld01vZGVscy9wb3NpdGlvbk1vZGVsL2xhdExuZy5tb2RlbCc7XG5pbXBvcnQgeyBQQVJBTUVURVJTIH0gZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvcmUvc3JjL3V0aWwvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Rucy1jb3JlLW1vZHVsZXMvY3NzL3Jld29ya2Nzcyc7XG5pbXBvcnQgeyBUYXNrU2VydmljZSB9IGZyb20gJ34vQHNoYXJlZC9zZXJ2aWNlcy90YXNrLnNlcnZpY2UnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLW5ldy10YXNrJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25ldy10YXNrLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmV3LXRhc2suY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZXdUYXNrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdGFzazpUYXNrO1xuICBzdWI6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIFRhc2tTZXJ2aXNlIDogVGFza1NlcnZpY2UgLHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciAgKSB7XG4gICAgdGhpcy50YXNrPSBuZXcgVGFzaygpO1xuICB9XG4gIFxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1YiA9IHRoaXMucm91dGVcbiAgICAucXVlcnlQYXJhbXNcbiAgICAuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICB0aGlzLnRhc2suTGF0aXR1ZGUgPSBwYXJhbXMubGF0LFxuICAgICAgdGhpcy50YXNrLkxvbmdpdHVkZSA9IHBhcmFtcy5sbmdcbiAgICB9KTtcblxuICAgIC8vIHRoaXMuZm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgIC8vICAgXCJOYW1lXCI6IFt7IHZhbHVlOiBudWxsLCBkaXNhYmxlZDogZmFsc2UgfSwgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKV0pXSxcbiAgICAvLyAgIFwiRGVzY3JpcHRpb25cIjogW3sgdmFsdWU6IG51bGwsIGRpc2FibGVkOiBmYWxzZSB9XSxcbiAgICAvLyAgIFwiTGF0aXR1ZGVcIjogW3sgdmFsdWU6IG51bGwsIGRpc2FibGVkOiBmYWxzZSB9LCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXG4gICAgLy8gICBcIkxvbmdpdHVkZVwiOiBbeyB2YWx1ZTogbnVsbCwgZGlzYWJsZWQ6IGZhbHNlIH0sIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcbiAgICAvLyAgIFwiUmFkaXVzXCI6IFt7IHZhbHVlOiAxMDAsIGRpc2FibGVkOiBmYWxzZSB9XSxcbiAgICAvLyAgIFwiU3RhcnRUaW1lXCI6IFt7IHZhbHVlOiBuZXcgRGF0ZSgpLCBkaXNhYmxlZDogZmFsc2UgfV0sXG4gICAgLy8gfSkgIFxuXG4gIH1cbiAgXG4gIFxuICAgY3JlYXRlTmV3VGFzaygpe1xuXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnRhc2suTmFtZSk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnRhc2suRGVzY3JpcHRpb24pO1xuICAgICAgY29uc29sZS5sb2codGhpcy50YXNrLkxhdGl0dWRlKTtcblxuICAgICAgY29uc29sZS5sb2codGhpcy50YXNrLkxvbmdpdHVkZSk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnRhc2suUmFkaXVzKTtcbiAgICAgIHRoaXMuVGFza1NlcnZpc2UuQ3JldGVUYXNrKHRoaXMudGFzayk7XG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiLi4vdGFzay1saXN0XCJdKTtcblxuICAgfVxuXG4gICAgbW92ZVRvTWFwKCl7XG4gICAgICBjb25zb2xlLmxvZyhcInRhcCB0byBtYXBcIik7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIuLi9tYXBcIl0pO1xuICAgIH1cbiAgICBiZWNrKCl7XG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiLi4vdGFzay1saXN0XCJdKTtcbiAgXG4gICAgfVxuXG4gICAgXG4gIH0iXX0=