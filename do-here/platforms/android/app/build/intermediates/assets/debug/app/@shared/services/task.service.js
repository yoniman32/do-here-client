"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var appSettings = require("application-settings");
var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
        this.serverUrl = "http://192.168.14.82/api/Tasks";
    }
    TaskService.prototype.submit = function (task) {
        var req = this.http.post(this.serverUrl + "/PostTask", {
            name: task.Name,
            description: task.Description,
            latitude: task.latitude,
            longitude: task.longitude,
            startTime: task.startTime,
            endTime: task.endTime,
            radius: task.radius
        }).subscribe(function (res) {
            console.log(res);
            console.log("success!");
        });
        (function (err) {
            console.log("Error occured " + " status: " + Response.error);
        });
    };
    TaskService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFzay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLDZDQUErRDtBQUcvRCxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUlwRDtJQUdFLHFCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRjVCLGNBQVMsR0FBRyxnQ0FBZ0MsQ0FBQztJQUViLENBQUM7SUFFM0MsNEJBQU0sR0FBTixVQUFPLElBQVM7UUFDWixJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsU0FBUyxjQUFXLEVBQUU7WUFDckQsSUFBSSxFQUFHLElBQUksQ0FBQyxJQUFJO1lBQ2hCLFdBQVcsRUFBRyxJQUFJLENBQUMsV0FBVztZQUM5QixRQUFRLEVBQUcsSUFBSSxDQUFDLFFBQVE7WUFDeEIsU0FBUyxFQUFHLElBQUksQ0FBQyxTQUFTO1lBQzFCLFNBQVMsRUFBRyxJQUFJLENBQUMsU0FBUztZQUMxQixPQUFPLEVBQUcsSUFBSSxDQUFDLE9BQU87WUFDdEIsTUFBTSxFQUFHLElBQUksQ0FBQyxNQUFNO1NBQzNCLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRzVCLENBQUMsQ0FBQyxDQUFDO1FBQUEsQ0FBQSxVQUFBLEdBQUc7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLFdBQVcsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakUsQ0FBQyxDQUFBLENBQUE7SUFDRCxDQUFDO0lBdEJZLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FJZSxpQkFBVTtPQUh6QixXQUFXLENBdUJ2QjtJQUFELGtCQUFDO0NBQUEsQUF2QkQsSUF1QkM7QUF2Qlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi92aWV3TW9kZWxzL3VzZXJWaWV3TW9kZWwvdXNlclZpZXdNb2RlbFwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgVGFzayB9IGZyb20gXCJ+L0BzaGFyZWQvdmlld01vZGVscy90YXNrVmlld01vZGVsL3Rhc2tWaWV3TW9kZWxcIjtcclxuaW1wb3J0IHsgSW50ZXIgfSBmcm9tICd+L0BzaGFyZWQvc2VydmljZXMvaW50ZXInXHJcbmNvbnN0IGFwcFNldHRpbmdzID0gcmVxdWlyZShcImFwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRhc2tTZXJ2aWNlIHtcclxuICBwcml2YXRlIHNlcnZlclVybCA9IFwiaHR0cDovLzE5Mi4xNjguMTQuODIvYXBpL1Rhc2tzXCI7XHJcbiAgcm91dGVyRXh0ZW5zaW9uczogYW55O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG5zdWJtaXQodGFzazpUYXNrKXtcclxuICAgIGNvbnN0IHJlcSA9IHRoaXMuaHR0cC5wb3N0KGAke3RoaXMuc2VydmVyVXJsfS9Qb3N0VGFza2AsIHtcclxuICAgICAgICBuYW1lIDogdGFzay5OYW1lLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uIDogdGFzay5EZXNjcmlwdGlvbixcclxuICAgICAgICBsYXRpdHVkZSA6IHRhc2subGF0aXR1ZGUsXHJcbiAgICAgICAgbG9uZ2l0dWRlIDogdGFzay5sb25naXR1ZGUsXHJcbiAgICAgICAgc3RhcnRUaW1lIDogdGFzay5zdGFydFRpbWUsXHJcbiAgICAgICAgZW5kVGltZSA6IHRhc2suZW5kVGltZSxcclxuICAgICAgICByYWRpdXMgOiB0YXNrLnJhZGl1cyAgICAgIFxyXG59KS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3MhXCIpO1xyXG4gICAgXHJcbiAgICAgIFxyXG59KTtlcnIgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJFcnJvciBvY2N1cmVkIFwiICsgXCIgc3RhdHVzOiBcIiArIFJlc3BvbnNlLmVycm9yKTtcclxufVxyXG59XHJcbn0iXX0=