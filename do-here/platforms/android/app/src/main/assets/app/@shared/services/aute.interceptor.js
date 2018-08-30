"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_guard_service_1 = require("./auth-guard.service");
var appSettings = require("application-settings");
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(auth) {
    }
    AuthInterceptor.prototype.intercept = function (request, next) {
        if (request.url != 'http://192.168.14.82/api/Users/PostUser' && request.url != 'http://192.168.14.82/token') {
            var authToken = appSettings.getString('token');
            request = request.clone({
                setHeaders: {
                    Authorization: "bearer " + authToken
                }
            });
            console.log("intercepted", request);
        }
        return next.handle(request);
    };
    AuthInterceptor = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [auth_guard_service_1.AuthGuard])
    ], AuthInterceptor);
    return AuthInterceptor;
}());
exports.AuthInterceptor = AuthInterceptor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0ZS5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGUuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBMkM7QUFFM0MsMkRBQWlEO0FBRWpELElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBR3BEO0lBQ0UseUJBQVksSUFBZTtJQUFFLENBQUM7SUFDOUIsbUNBQVMsR0FBVCxVQUFVLE9BQXlCLEVBQUUsSUFBaUI7UUFDcEQsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSx5Q0FBeUMsSUFBSSxPQUFPLENBQUMsR0FBRyxJQUFHLDRCQUE2QixDQUFDLENBQUEsQ0FBQztZQUV4RyxJQUFNLFNBQVMsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2pELE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUN0QixVQUFVLEVBQUU7b0JBQ1YsYUFBYSxFQUFFLFNBQVMsR0FBQyxTQUFTO2lCQUNuQzthQUNGLENBQUMsQ0FBQztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBZFEsZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQUVPLDhCQUFTO09BRGhCLGVBQWUsQ0FlekI7SUFBRCxzQkFBQztDQUFBLEFBZkgsSUFlRztBQWZVLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0h0dHBSZXF1ZXN0LEh0dHBIYW5kbGVyLEh0dHBFdmVudCxIdHRwSW50ZXJjZXB0b3J9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnLi9hdXRoLWd1YXJkLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yeGpzXCI7XHJcbmNvbnN0IGFwcFNldHRpbmdzID0gcmVxdWlyZShcImFwcGxpY2F0aW9uLXNldHRpbmdzXCIpO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuICBjb25zdHJ1Y3RvcihhdXRoIDpBdXRoR3VhcmQpe31cclxuICBpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XHJcbiAgICBpZihyZXF1ZXN0LnVybCAhPSAnaHR0cDovLzE5Mi4xNjguMTQuODIvYXBpL1VzZXJzL1Bvc3RVc2VyJyAmJiByZXF1ZXN0LnVybCAhPSdodHRwOi8vMTkyLjE2OC4xNC44Mi90b2tlbicgKXtcclxuXHJcbiAgICAgICAgY29uc3QgYXV0aFRva2VuID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKCd0b2tlbicpO1xyXG4gICAgICAgIHJlcXVlc3QgPSByZXF1ZXN0LmNsb25lKHtcclxuICAgICAgICAgIHNldEhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYGJlYXJlciBgK2F1dGhUb2tlblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW50ZXJjZXB0ZWRcIiwgcmVxdWVzdCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpO1xyXG4gICAgfVxyXG4gIH0iXX0=