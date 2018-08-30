"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var task_service_1 = require("~/@shared/services/task.service");
var user_service_1 = require("~/@shared/services/user.service");
var appSettings = require("application-settings");
var TaskListComponent = /** @class */ (function () {
    function TaskListComponent(userService, taskService, routerExtensions, zone) {
        this.userService = userService;
        this.taskService = taskService;
        this.routerExtensions = routerExtensions;
        this.zone = zone;
        this.userTaskList = [];
    }
    TaskListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.getAllTasks().toPromise().then(function (res) {
            _this.userTaskList = res;
            // this.zone.run(()=>{})
            console.log("data is here ! ==>>> ", _this.userTaskList);
        });
    };
    TaskListComponent.prototype.submit = function () {
        console.log("tap");
        this.routerExtensions.navigate(["../new-task"]);
    };
    TaskListComponent.prototype.logOut = function () {
        this.routerExtensions.navigate(["../login"]);
    };
    TaskListComponent.prototype.Tokenv = function () {
        var authToken = appSettings.getString('token');
        var dialogs = require("ui/dialogs");
        dialogs.alert({
            title: "Token",
            message: authToken,
            okButtonText: "Ok"
        }).then(function () {
            console.log("Dialog closed!");
        });
        // this.userService.tokenRef();
    };
    TaskListComponent.prototype.onItemTap = function (data) {
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
    };
    TaskListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-task-list',
            templateUrl: './task-list.component.html',
            styleUrls: ['./task-list.component.scss']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, task_service_1.TaskService, router_1.RouterExtensions, core_1.NgZone])
    ], TaskListComponent);
    return TaskListComponent;
}());
exports.TaskListComponent = TaskListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhc2stbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNEU7QUFDNUUsc0RBQStEO0FBRS9ELGdFQUE4RDtBQUM5RCxnRUFBOEQ7QUFDOUQsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFTcEQ7SUFFRSwyQkFBb0IsV0FBd0IsRUFBVSxXQUF3QixFQUFVLGdCQUFrQyxFQUFVLElBQVk7UUFBNUgsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQzlJLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDakQsS0FBSSxDQUFDLFlBQVksR0FBQyxHQUFHLENBQUM7WUFDdEIsd0JBQXdCO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFELENBQUMsQ0FBQyxDQUFBO0lBRUosQ0FBQztJQUdELGtDQUFNLEdBQU47UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDRCxrQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFFL0MsQ0FBQztJQUVELGtDQUFNLEdBQU47UUFDRSxJQUFNLFNBQVMsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pELElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ1gsS0FBSyxFQUFFLE9BQU87WUFDZCxPQUFPLEVBQUMsU0FBUztZQUNqQixZQUFZLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO1FBQ0YsK0JBQStCO0lBQ2pDLENBQUM7SUFHRCxxQ0FBUyxHQUFULFVBQVUsSUFBSTtRQUNkLDBCQUEwQjtRQUMxQiwyQkFBMkI7UUFDM0IsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDWixLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDaEIsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQ3pCLFlBQVksRUFBRSxJQUFJO1NBQ2pCLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFFSixDQUFDO0lBbkRVLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDMUMsQ0FBQzt5Q0FHaUMsMEJBQVcsRUFBdUIsMEJBQVcsRUFBNEIseUJBQWdCLEVBQWdCLGFBQU07T0FGckksaUJBQWlCLENBcUQ3QjtJQUFELHdCQUFDO0NBQUEsQUFyREQsSUFxREM7QUFyRFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnfi9Ac2hhcmVkL3ZpZXdNb2RlbHMvdGFza1ZpZXdNb2RlbC90YXNrVmlld01vZGVsJztcbmltcG9ydCB7IFRhc2tTZXJ2aWNlIH0gZnJvbSAnfi9Ac2hhcmVkL3NlcnZpY2VzL3Rhc2suc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJ34vQHNoYXJlZC9zZXJ2aWNlcy91c2VyLnNlcnZpY2UnO1xuY29uc3QgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XG5cblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLXRhc2stbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90YXNrLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YXNrLWxpc3QuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUYXNrTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyB1c2VyVGFza0xpc3Q6IGFueTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZSA6VXNlclNlcnZpY2UsIHByaXZhdGUgdGFza1NlcnZpY2U6IFRhc2tTZXJ2aWNlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgem9uZTogTmdab25lKSB7XG4gICAgdGhpcy51c2VyVGFza0xpc3QgPSBbXTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudGFza1NlcnZpY2UuZ2V0QWxsVGFza3MoKS50b1Byb21pc2UoKS50aGVuKHJlcyA9PiB7XG4gICAgICB0aGlzLnVzZXJUYXNrTGlzdD1yZXM7XG4gICAgICAvLyB0aGlzLnpvbmUucnVuKCgpPT57fSlcbiAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBpcyBoZXJlICEgPT0+Pj4gXCIsIHRoaXMudXNlclRhc2tMaXN0KTtcbiAgICB9KVxuXG4gIH1cblxuXG4gIHN1Ym1pdCgpIHtcbiAgICBjb25zb2xlLmxvZyhcInRhcFwiKTtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiLi4vbmV3LXRhc2tcIl0pO1xuICB9XG4gIGxvZ091dCgpIHtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiLi4vbG9naW5cIl0pO1xuXG4gIH1cblxuICBUb2tlbnYoKSB7XG4gICAgY29uc3QgYXV0aFRva2VuID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKCd0b2tlbicpO1xuICAgIHZhciBkaWFsb2dzID0gcmVxdWlyZShcInVpL2RpYWxvZ3NcIik7XG4gICAgZGlhbG9ncy5hbGVydCh7XG4gICAgICAgdGl0bGU6IFwiVG9rZW5cIixcbiAgICAgICBtZXNzYWdlOmF1dGhUb2tlbixcbiAgICAgICBva0J1dHRvblRleHQ6IFwiT2tcIlxuICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XG4gICB9KTtcbiAgICAvLyB0aGlzLnVzZXJTZXJ2aWNlLnRva2VuUmVmKCk7XG4gIH1cblxuXG4gIG9uSXRlbVRhcChkYXRhKXtcbiAgLy8gYWxlcnQobmFtZS5EZXNjcmlwdGlvbilcbiAgLy8gcHJvbXB0KG5hbWUuRGVzY3JpcHRpb24pXG4gIHZhciBkaWFsb2dzID0gcmVxdWlyZShcInVpL2RpYWxvZ3NcIik7XG4gICAgZGlhbG9ncy5hbGVydCh7XG4gICAgICB0aXRsZTogZGF0YS5OYW1lLFxuICAgICAgbWVzc2FnZTogZGF0YS5EZXNjcmlwdGlvbixcbiAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgY2xvc2VkIVwiKTtcbiAgIH0pO1xuICBcbiAgfVxuXG59XG4iXX0=