"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_guard_service_1 = require("./auth-guard.service");
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(auth) {
        this.auth = auth;
    }
    AuthInterceptor.prototype.intercept = function (request, next) {
        // const authToken = appSettings.getString('token');
        // console.log("token is  "+authToken);
        //   request = request.clone({
        //       setHeaders: {
        //         Authorization: `Bearer ${appSettings.getString('token')}`
        //       }
        //     });
        console.log("intercepted", request);
        return next.handle(request);
    };
    AuthInterceptor = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [auth_guard_service_1.AuthGuard])
    ], AuthInterceptor);
    return AuthInterceptor;
}());
exports.AuthInterceptor = AuthInterceptor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0ZS5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGUuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBMkM7QUFFM0MsMkRBQWlEO0FBSWpEO0lBQ0UseUJBQW1CLElBQWU7UUFBZixTQUFJLEdBQUosSUFBSSxDQUFXO0lBQUUsQ0FBQztJQUNuQyxtQ0FBUyxHQUFULFVBQVUsT0FBeUIsRUFBRSxJQUFpQjtRQUNwRCxvREFBb0Q7UUFDcEQsdUNBQXVDO1FBRXZDLDhCQUE4QjtRQUM5QixzQkFBc0I7UUFDdEIsb0VBQW9FO1FBQ3BFLFVBQVU7UUFDVixVQUFVO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQWJJLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTt5Q0FFYyw4QkFBUztPQUR2QixlQUFlLENBYzNCO0lBQUQsc0JBQUM7Q0FBQSxBQWRELElBY0M7QUFkWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtIdHRwUmVxdWVzdCxIdHRwSGFuZGxlcixIdHRwRXZlbnQsSHR0cEludGVyY2VwdG9yfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gJy4vYXV0aC1ndWFyZC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcnhqc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXV0aDogQXV0aEd1YXJkKXt9XHJcbiAgICBpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XHJcbiAgICAgIC8vIGNvbnN0IGF1dGhUb2tlbiA9IGFwcFNldHRpbmdzLmdldFN0cmluZygndG9rZW4nKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJ0b2tlbiBpcyAgXCIrYXV0aFRva2VuKTtcclxuXHJcbiAgICAgIC8vICAgcmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoe1xyXG4gICAgICAvLyAgICAgICBzZXRIZWFkZXJzOiB7XHJcbiAgICAgIC8vICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FwcFNldHRpbmdzLmdldFN0cmluZygndG9rZW4nKX1gXHJcbiAgICAgIC8vICAgICAgIH1cclxuICAgICAgLy8gICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImludGVyY2VwdGVkXCIsIHJlcXVlc3QpO1xyXG4gICAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpO1xyXG4gICAgICAgIH1cclxufSJdfQ==