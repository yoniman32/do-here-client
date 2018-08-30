"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_routes_1 = require("~/app.routes");
var user_service_1 = require("~/@shared/services/user.service");
var task_service_1 = require("~/@shared/services/task.service");
var http_1 = require("@angular/common/http");
var aute_interceptor_1 = require("~/@shared/services/aute.interceptor");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: app_routes_1.AUTH_PROVIDERS.concat([user_service_1.UserService, task_service_1.TaskService])
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        core_1.NgModule({
            declarations: [],
            exports: [],
            providers: [{ provide: http_1.HTTP_INTERCEPTORS, useClass: aute_interceptor_1.AuthInterceptor, multi: true }]
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBMEU7QUFDMUUsMkNBQThDO0FBQzlDLGdFQUE4RDtBQUM5RCxnRUFBOEQ7QUFDOUQsNkNBQXlEO0FBQ3pELHdFQUFzRTtBQU90RTtJQUFBO0lBT0EsQ0FBQztxQkFQWSxZQUFZO0lBQ2Qsb0JBQU8sR0FBZDtRQUNJLE1BQU0sQ0FBQztZQUNDLFFBQVEsRUFBRSxjQUFZO1lBQ3RCLFNBQVMsRUFBTSwyQkFBYyxTQUFFLDBCQUFXLEVBQUMsMEJBQVcsRUFBQztTQUM5RCxDQUFDO0lBQ04sQ0FBQztJQU5RLFlBQVk7UUFMeEIsZUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFLEVBQUU7WUFDaEIsT0FBTyxFQUFFLEVBQUU7WUFDWCxTQUFTLEVBQUUsQ0FBRSxFQUFDLE9BQU8sRUFBRSx3QkFBaUIsRUFBRSxRQUFRLEVBQUMsa0NBQWUsRUFBRSxLQUFLLEVBQUMsSUFBSSxFQUFDLENBQUM7U0FDbkYsQ0FBQztPQUNXLFlBQVksQ0FPeEI7SUFBRCxtQkFBQzs7Q0FBQSxBQVBELElBT0M7QUFQWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFVVEhfUFJPVklERVJTIH0gZnJvbSBcIn4vYXBwLnJvdXRlc1wiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCJ+L0BzaGFyZWQvc2VydmljZXMvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFRhc2tTZXJ2aWNlIH0gZnJvbSBcIn4vQHNoYXJlZC9zZXJ2aWNlcy90YXNrLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgQXV0aEludGVyY2VwdG9yIH0gZnJvbSBcIn4vQHNoYXJlZC9zZXJ2aWNlcy9hdXRlLmludGVyY2VwdG9yXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXSxcclxuICAgIGV4cG9ydHM6IFtdLFxyXG4gICAgcHJvdmlkZXJzOiBbIHtwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlQ2xhc3M6QXV0aEludGVyY2VwdG9yLCBtdWx0aTp0cnVlfV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7XHJcbiAgICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbmdNb2R1bGU6IFNoYXJlZE1vZHVsZSxcclxuICAgICAgICAgICAgICAgIHByb3ZpZGVyczogWy4uLkFVVEhfUFJPVklERVJTLCBVc2VyU2VydmljZSxUYXNrU2VydmljZV1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==