"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_routes_1 = require("~/app.routes");
var user_service_1 = require("~/@shared/services/user.service");
var task_service_1 = require("~/@shared/services/task.service");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: app_routes_1.AUTH_PROVIDERS.concat([user_service_1.UserService, task_service_1.TaskService,])
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        core_1.NgModule({
            declarations: [],
            exports: [],
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBMEU7QUFDMUUsMkNBQThDO0FBQzlDLGdFQUE4RDtBQUM5RCxnRUFBOEQ7QUFPOUQ7SUFBQTtJQVNBLENBQUM7cUJBVFksWUFBWTtJQUNkLG9CQUFPLEdBQWQ7UUFDSSxNQUFNLENBQUM7WUFDQyxRQUFRLEVBQUUsY0FBWTtZQUN0QixTQUFTLEVBQU0sMkJBQWMsU0FBRSwwQkFBVyxFQUFDLDBCQUFXLEdBRXpEO1NBQ0osQ0FBQztJQUNOLENBQUM7SUFSUSxZQUFZO1FBSnhCLGVBQVEsQ0FBQztZQUNOLFlBQVksRUFBRSxFQUFFO1lBQ2hCLE9BQU8sRUFBRSxFQUFFO1NBQ2QsQ0FBQztPQUNXLFlBQVksQ0FTeEI7SUFBRCxtQkFBQzs7Q0FBQSxBQVRELElBU0M7QUFUWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFVVEhfUFJPVklERVJTIH0gZnJvbSBcIn4vYXBwLnJvdXRlc1wiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCJ+L0BzaGFyZWQvc2VydmljZXMvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFRhc2tTZXJ2aWNlIH0gZnJvbSBcIn4vQHNoYXJlZC9zZXJ2aWNlcy90YXNrLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEF1dGhJbnRlcmNlcHRvciB9IGZyb20gXCJ+L0BzaGFyZWQvc2VydmljZXMvYXV0ZS5pbnRlcmNlcHRvclwiO1xyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXSxcclxuICAgIGV4cG9ydHM6IFtdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHtcclxuICAgIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBuZ01vZHVsZTogU2hhcmVkTW9kdWxlLFxyXG4gICAgICAgICAgICAgICAgcHJvdmlkZXJzOiBbLi4uQVVUSF9QUk9WSURFUlMsIFVzZXJTZXJ2aWNlLFRhc2tTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==