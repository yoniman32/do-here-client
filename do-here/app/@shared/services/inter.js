"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_guard_service_1 = require("./auth-guard.service");
var appSettings = require("application-settings");
var Inter = /** @class */ (function () {
    function Inter(auth) {
        this.auth = auth;
    }
    Inter.prototype.intercept = function (request, next) {
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
    Inter = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [auth_guard_service_1.AuthGuard])
    ], Inter);
    return Inter;
}());
exports.Inter = Inter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUEyQztBQUUzQywyREFBaUQ7QUFFakQsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFJcEQ7SUFDSSxlQUFtQixJQUFlO1FBQWYsU0FBSSxHQUFKLElBQUksQ0FBVztJQUFHLENBQUM7SUFFdEMseUJBQVMsR0FBVCxVQUFVLE9BQXlCLEVBQUUsSUFBaUI7UUFDcEQsb0RBQW9EO1FBQ3BELHVDQUF1QztRQUV2Qyw4QkFBOEI7UUFDOUIsc0JBQXNCO1FBQ3RCLG9FQUFvRTtRQUNwRSxVQUFVO1FBQ1YsVUFBVTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFkSSxLQUFLO1FBRGpCLGlCQUFVLEVBQUU7eUNBRWdCLDhCQUFTO09BRHpCLEtBQUssQ0FlakI7SUFBRCxZQUFDO0NBQUEsQUFmRCxJQWVDO0FBZlksc0JBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7SHR0cFJlcXVlc3QsSHR0cEhhbmRsZXIsSHR0cEV2ZW50LEh0dHBJbnRlcmNlcHRvcn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tICcuL2F1dGgtZ3VhcmQuc2VydmljZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3J4anNcIjtcclxuY29uc3QgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSW50ZXIgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGF1dGg6IEF1dGhHdWFyZCkge31cclxuXHJcbiAgICBpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XHJcbiAgICAgIC8vIGNvbnN0IGF1dGhUb2tlbiA9IGFwcFNldHRpbmdzLmdldFN0cmluZygndG9rZW4nKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJ0b2tlbiBpcyAgXCIrYXV0aFRva2VuKTtcclxuXHJcbiAgICAgIC8vICAgcmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoe1xyXG4gICAgICAvLyAgICAgICBzZXRIZWFkZXJzOiB7XHJcbiAgICAgIC8vICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FwcFNldHRpbmdzLmdldFN0cmluZygndG9rZW4nKX1gXHJcbiAgICAgIC8vICAgICAgIH1cclxuICAgICAgLy8gICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImludGVyY2VwdGVkXCIsIHJlcXVlc3QpO1xyXG4gICAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpO1xyXG4gICAgICAgIH1cclxufSJdfQ==