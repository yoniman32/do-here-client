"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
        this.serverUrl = "http://192.168.14.82/api/Tasks";
    }
    TaskService.prototype.CreteTask = function (task) {
        console.log("tap new task");
        var req = this.http.post(this.serverUrl + "/PostTask", {
            Name: task.Name,
            Description: task.Description,
            Latitude: task.Latitude,
            Longitude: task.Longitude,
            Radius: task.Radius,
            Created: task.Created,
            LastUpdate: task.LastUpdate,
        }).subscribe(function (res) {
            console.log(res);
            console.log("success!");
        });
        (function (err) {
            console.log("Error occured " + " status: " + Response.error);
        });
    };
    TaskService.prototype.getAllTasks = function () {
        return this.http.get(this.serverUrl + "/GetTasks");
    };
    TaskService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;
//     subscribe((res =>
//     console.log("success" , res)
//    ), err => {
//     console.log("Error occured " + " status: " + Response.error);
//   });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFzay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUFpRDtBQU1qRDtJQUlFLHFCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBSDVCLGNBQVMsR0FBRyxnQ0FBZ0MsQ0FBQztJQUdiLENBQUM7SUFFekMsK0JBQVMsR0FBVCxVQUFVLElBQVM7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM1QixJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsU0FBUyxjQUFXLEVBQUU7WUFFckQsSUFBSSxFQUFHLElBQUksQ0FBQyxJQUFJO1lBQ2hCLFdBQVcsRUFBRyxJQUFJLENBQUMsV0FBVztZQUM5QixRQUFRLEVBQUcsSUFBSSxDQUFDLFFBQVE7WUFDeEIsU0FBUyxFQUFHLElBQUksQ0FBQyxTQUFTO1lBQzFCLE1BQU0sRUFBRyxJQUFJLENBQUMsTUFBTTtZQUNwQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1NBQ2xDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsQ0FBQSxVQUFBLEdBQUc7WUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLFdBQVcsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakUsQ0FBQyxDQUFBLENBQUE7SUFDRCxDQUFDO0lBR0QsaUNBQVcsR0FBWDtRQUNJLE1BQU0sQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsU0FBUyxjQUFXLENBQUMsQ0FBRTtJQUV6RCxDQUFDO0lBOUJZLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FLZSxpQkFBVTtPQUp6QixXQUFXLENBa0N2QjtJQUFELGtCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7QUFsQ1ksa0NBQVc7QUFvQ3hCLHdCQUF3QjtBQUN4QixtQ0FBbUM7QUFDbkMsaUJBQWlCO0FBQ2pCLG9FQUFvRTtBQUNwRSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgVGFzayB9IGZyb20gXCJ+L0BzaGFyZWQvdmlld01vZGVscy90YXNrVmlld01vZGVsL3Rhc2tWaWV3TW9kZWxcIjtcclxuXHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVGFza1NlcnZpY2Uge1xyXG4gIHByaXZhdGUgc2VydmVyVXJsID0gXCJodHRwOi8vMTkyLjE2OC4xNC44Mi9hcGkvVGFza3NcIjtcclxuICByb3V0ZXJFeHRlbnNpb25zOiBhbnk7XHJcbiAgICBkYXRhOmFueVtdO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gIENyZXRlVGFzayh0YXNrOlRhc2spe1xyXG4gICAgY29uc29sZS5sb2coXCJ0YXAgbmV3IHRhc2tcIik7XHJcbiAgICBjb25zdCByZXEgPSB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnNlcnZlclVybH0vUG9zdFRhc2tgLCB7XHJcblxyXG4gICAgICAgIE5hbWUgOiB0YXNrLk5hbWUsXHJcbiAgICAgICAgRGVzY3JpcHRpb24gOiB0YXNrLkRlc2NyaXB0aW9uLFxyXG4gICAgICAgIExhdGl0dWRlIDogdGFzay5MYXRpdHVkZSxcclxuICAgICAgICBMb25naXR1ZGUgOiB0YXNrLkxvbmdpdHVkZSxcclxuICAgICAgICBSYWRpdXMgOiB0YXNrLlJhZGl1cyxcclxuICAgICAgICBDcmVhdGVkOiB0YXNrLkNyZWF0ZWQsXHJcbiAgICAgICAgTGFzdFVwZGF0ZTogdGFzay5MYXN0VXBkYXRlLFxyXG59KS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3MhXCIpO1xyXG59KTtcclxuZXJyID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igb2NjdXJlZCBcIiArIFwiIHN0YXR1czogXCIgKyBSZXNwb25zZS5lcnJvcik7XHJcbn1cclxufVxyXG5cclxuXHJcbmdldEFsbFRhc2tzKCkge1xyXG4gICAgcmV0dXJuICB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuc2VydmVyVXJsfS9HZXRUYXNrc2ApIDtcclxuXHJcbn1cclxuXHJcblxyXG5cclxufVxyXG4gICAgXHJcbi8vICAgICBzdWJzY3JpYmUoKHJlcyA9PlxyXG4vLyAgICAgY29uc29sZS5sb2coXCJzdWNjZXNzXCIgLCByZXMpXHJcbi8vICAgICksIGVyciA9PiB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhcIkVycm9yIG9jY3VyZWQgXCIgKyBcIiBzdGF0dXM6IFwiICsgUmVzcG9uc2UuZXJyb3IpO1xyXG4vLyAgIH0pO1xyXG5cclxuIl19