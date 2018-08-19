"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_routes_1 = require("~/app.routes");
var user_service_1 = require("./services/user.service");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: app_routes_1.AUTH_PROVIDERS.concat([user_service_1.UserService])
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBOEQ7QUFDOUQsMkNBQThDO0FBQzlDLHdEQUFzRDtBQU10RDtJQUFBO0lBT0EsQ0FBQztxQkFQWSxZQUFZO0lBQ2Qsb0JBQU8sR0FBZDtRQUNJLE1BQU0sQ0FBQztZQUNILFFBQVEsRUFBRSxjQUFZO1lBQ3RCLFNBQVMsRUFBTSwyQkFBYyxTQUFFLDBCQUFXLEVBQUM7U0FDOUMsQ0FBQztJQUNOLENBQUM7SUFOUSxZQUFZO1FBSnhCLGVBQVEsQ0FBQztZQUNOLFlBQVksRUFBRSxFQUFFO1lBQ2hCLE9BQU8sRUFBRSxFQUFFO1NBQ2QsQ0FBQztPQUNXLFlBQVksQ0FPeEI7SUFBRCxtQkFBQzs7Q0FBQSxBQVBELElBT0M7QUFQWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFVVEhfUFJPVklERVJTIH0gZnJvbSBcIn4vYXBwLnJvdXRlc1wiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3VzZXIuc2VydmljZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW10sXHJcbiAgICBleHBvcnRzOiBbXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7XHJcbiAgICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuZ01vZHVsZTogU2hhcmVkTW9kdWxlLFxyXG4gICAgICAgICAgICBwcm92aWRlcnM6IFsuLi5BVVRIX1BST1ZJREVSUywgVXNlclNlcnZpY2VdXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG4iXX0=