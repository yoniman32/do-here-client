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
            _this.task.latitude = JSON.stringify(params.lat),
                _this.task.longitude = JSON.stringify(params.lng);
        });
    };
    NewTaskComponent.prototype.createNewTask = function () {
        console.log(this.task.Name);
        console.log(this.task.Description);
        console.log(this.task.latitude);
        console.log(this.task.longitude);
        this.TaskServise.submit(this.task);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LXRhc2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmV3LXRhc2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStFO0FBQy9FLGtGQUF3RTtBQUN4RSxzREFBK0Q7QUFJL0QsMENBQXlEO0FBRXpELGdFQUE4RDtBQVE5RDtJQUlFLDBCQUFvQixXQUF5QixFQUFVLGdCQUFrQyxFQUFVLEtBQXFCLEVBQVksTUFBYztRQUE5SCxnQkFBVyxHQUFYLFdBQVcsQ0FBYztRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFZLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDaEosSUFBSSxDQUFDLElBQUksR0FBRSxJQUFJLG9CQUFJLEVBQUUsQ0FBQztJQUV2QixDQUFDO0lBRUYsbUNBQVEsR0FBUjtRQUFBLGlCQU9JO1FBTkYsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSzthQUNsQixXQUFXO2FBQ1gsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNmLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDL0MsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDbEQsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBR0gsd0NBQWEsR0FBYjtRQUNHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVBLG9DQUFTLEdBQVQ7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCwrQkFBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFFbkQsQ0FBQztJQWxDUSxnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3pDLENBQUM7eUNBS2tDLDBCQUFXLEVBQTRCLHlCQUFnQixFQUFpQix1QkFBYyxFQUFvQixlQUFNO09BSnZJLGdCQUFnQixDQW1DMUI7SUFBRCx1QkFBQztDQUFBLEFBbkNILElBbUNHO0FBbkNVLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhc2sgfSBmcm9tICd+L0BzaGFyZWQvdmlld01vZGVscy90YXNrVmlld01vZGVsL3Rhc2tWaWV3TW9kZWwnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAvbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXRMbmcgfSBmcm9tICd+L0BzaGFyZWQvdmlld01vZGVscy9wb3NpdGlvbk1vZGVsL2xhdExuZy5tb2RlbCc7XG5pbXBvcnQgeyBQQVJBTUVURVJTIH0gZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvcmUvc3JjL3V0aWwvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Rucy1jb3JlLW1vZHVsZXMvY3NzL3Jld29ya2Nzcyc7XG5pbXBvcnQgeyBUYXNrU2VydmljZSB9IGZyb20gJ34vQHNoYXJlZC9zZXJ2aWNlcy90YXNrLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtbmV3LXRhc2snLFxuICB0ZW1wbGF0ZVVybDogJy4vbmV3LXRhc2suY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZXctdGFzay5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5ld1Rhc2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB0YXNrOlRhc2s7XG4gIHN1YjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgVGFza1NlcnZpc2UgOiBUYXNrU2VydmljZSAscHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgICBwcml2YXRlIHJvdXRlcjogUm91dGVyICApIHtcbiAgICB0aGlzLnRhc2s9IG5ldyBUYXNrKCk7XG5cbiAgIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1YiA9IHRoaXMucm91dGVcbiAgICAgIC5xdWVyeVBhcmFtc1xuICAgICAgLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICB0aGlzLnRhc2subGF0aXR1ZGUgPSBKU09OLnN0cmluZ2lmeShwYXJhbXMubGF0KSxcbiAgICAgICAgdGhpcy50YXNrLmxvbmdpdHVkZSA9IEpTT04uc3RyaW5naWZ5KHBhcmFtcy5sbmcpXG4gICAgICB9KTtcbiAgICAgfVxuICAgIFxuICAgXG4gICBjcmVhdGVOZXdUYXNrKCl7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnRhc2suTmFtZSk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnRhc2suRGVzY3JpcHRpb24pO1xuICAgICAgY29uc29sZS5sb2codGhpcy50YXNrLmxhdGl0dWRlKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMudGFzay5sb25naXR1ZGUpO1xuICAgICAgdGhpcy5UYXNrU2VydmlzZS5zdWJtaXQodGhpcy50YXNrKTtcbiAgIH1cblxuICAgIG1vdmVUb01hcCgpe1xuICAgICAgY29uc29sZS5sb2coXCJ0YXAgdG8gbWFwXCIpO1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiLi4vbWFwXCJdKTtcbiAgICB9XG4gICAgYmVjaygpe1xuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi4uL3Rhc2stbGlzdFwiXSk7XG4gIFxuICAgIH1cbiAgfSJdfQ==