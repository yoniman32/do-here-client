"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var appSettings = require("application-settings");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.serverUrl = "http://192.168.14.82/api/Users";
        this.TokenUrl = "http://192.168.14.82/token";
        this.isLogged = false;
    }
    UserService.prototype.register = function (user) {
        var _this = this;
        console.log("you are going to use " + user.email + " as your Email");
        debugger;
        var req = this.http.post(this.serverUrl + "/PostUser", {
            username: user.email,
            email: user.email,
            password: user.password
        }).subscribe(function (res) {
            console.log(res);
            console.log("success!");
            var headers = new http_1.HttpHeaders();
            headers.set('Content-Type', 'application/x-www-urlencoded');
            var tokenReq = _this.http.post(_this.TokenUrl, 
            //  '{"grant_type=password&username="'+user.email+'"&password="'+user.password+'}'
            "grant_type=password&username=" + user.email + "&password=" + user.password, { headers: headers }).subscribe(function (res) {
                console.log('/token - Success', res);
                appSettings.setString("token", res.access_token);
            }, function (err) {
                console.error('/token - Error', err);
            });
        }, function (err) {
            console.log("Error occured " + " status: " + Response.error);
        });
    };
    UserService.prototype.login = function () {
        // const authToken = appSettings.getString('token');
        // var headers: HttpHeaders = new HttpHeaders();
        // const req = this.http.get(this.serverUrl+"/GetUserById").
        //   subscribe((res =>
        //   console.log("success ${return this.isLogged}" , res)
        //  ), err => {
        //   console.log("Error occured " + " status: " + Response.error);
        // });
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLDZDQUErRDtBQUMvRCxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUlwRDtJQUtFLHFCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBSjVCLGNBQVMsR0FBRyxnQ0FBZ0MsQ0FBQztRQUM3QyxhQUFRLEdBQUcsNEJBQTRCLENBQUM7UUFJL0MsYUFBUSxHQUFhLEtBQUssQ0FBQztJQURZLENBQUM7SUFHekMsOEJBQVEsR0FBUixVQUFTLElBQVU7UUFBbkIsaUJBK0JDO1FBOUJDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3JFLFFBQVEsQ0FBQztRQUVULElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxTQUFTLGNBQVcsRUFBRTtZQUN2RCxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDcEIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUV4QixDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN4QixJQUFJLE9BQU8sR0FBZ0IsSUFBSSxrQkFBVyxFQUFFLENBQUM7WUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsOEJBQThCLENBQUMsQ0FBQztZQUM1RCxJQUFNLFFBQVEsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUTtZQUMzQyxrRkFBa0Y7WUFDbEYsa0NBQWdDLElBQUksQ0FBQyxLQUFLLGtCQUFhLElBQUksQ0FBQyxRQUFVLEVBQ3RFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUVyQixDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQVE7Z0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3JDLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNuRCxDQUFDLEVBQUUsVUFBQSxHQUFHO2dCQUNKLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDdEMsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDLEVBQUUsVUFBQSxHQUFHO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxXQUFXLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9ELENBQUMsQ0FDQSxDQUFDO0lBR0osQ0FBQztJQUVDLDJCQUFLLEdBQUw7UUFDQSxvREFBb0Q7UUFDcEQsZ0RBQWdEO1FBQ2hELDREQUE0RDtRQUM1RCxzQkFBc0I7UUFDdEIseURBQXlEO1FBQ3pELGVBQWU7UUFDZixrRUFBa0U7UUFDbEUsTUFBTTtJQUNSLENBQUM7SUFsRFUsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQU1lLGlCQUFVO09BTHpCLFdBQVcsQ0FzRHZCO0lBQUQsa0JBQUM7Q0FBQSxBQXRERCxJQXNEQztBQXREWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3ZpZXdNb2RlbHMvdXNlclZpZXdNb2RlbC91c2VyVmlld01vZGVsXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5jb25zdCBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBzZXJ2ZXJVcmwgPSBcImh0dHA6Ly8xOTIuMTY4LjE0LjgyL2FwaS9Vc2Vyc1wiO1xyXG4gIHByaXZhdGUgVG9rZW5VcmwgPSBcImh0dHA6Ly8xOTIuMTY4LjE0LjgyL3Rva2VuXCI7XHJcbiAgcm91dGVyRXh0ZW5zaW9uczogYW55O1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcbiAgIGlzTG9nZ2VkIDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICByZWdpc3Rlcih1c2VyOiBVc2VyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInlvdSBhcmUgZ29pbmcgdG8gdXNlIFwiICsgdXNlci5lbWFpbCArIFwiIGFzIHlvdXIgRW1haWxcIik7XHJcbiAgICBkZWJ1Z2dlcjtcclxuXHJcbiAgICBjb25zdCByZXEgPSB0aGlzLmh0dHAucG9zdChgJHt0aGlzLnNlcnZlclVybH0vUG9zdFVzZXJgLCB7XHJcbiAgICAgIHVzZXJuYW1lOiB1c2VyLmVtYWlsLFxyXG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmRcclxuICAgICAgXHJcbiAgICB9KS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgY29uc29sZS5sb2coXCJzdWNjZXNzIVwiKTtcclxuICAgICAgdmFyIGhlYWRlcnM6IEh0dHBIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XHJcbiAgICAgIGhlYWRlcnMuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctdXJsZW5jb2RlZCcpO1xyXG4gICAgICBjb25zdCB0b2tlblJlcSA9IHRoaXMuaHR0cC5wb3N0KHRoaXMuVG9rZW5VcmwsXHJcbiAgICAgICAgLy8gICd7XCJncmFudF90eXBlPXBhc3N3b3JkJnVzZXJuYW1lPVwiJyt1c2VyLmVtYWlsKydcIiZwYXNzd29yZD1cIicrdXNlci5wYXNzd29yZCsnfSdcclxuICAgICAgICBgZ3JhbnRfdHlwZT1wYXNzd29yZCZ1c2VybmFtZT0ke3VzZXIuZW1haWx9JnBhc3N3b3JkPSR7dXNlci5wYXNzd29yZH1gLFxyXG4gICAgICAgIHsgaGVhZGVyczogaGVhZGVycyB9XHJcblxyXG4gICAgICApLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnL3Rva2VuIC0gU3VjY2VzcycsIHJlcyk7XHJcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwidG9rZW5cIiwgcmVzLmFjY2Vzc190b2tlbik7XHJcbiAgICAgIH0sIGVyciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignL3Rva2VuIC0gRXJyb3InLCBlcnIpXHJcbiAgICAgIH0pXHJcbiAgICB9LCBlcnIgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIG9jY3VyZWQgXCIgKyBcIiBzdGF0dXM6IFwiICsgUmVzcG9uc2UuZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgKTtcclxuICAgIFxyXG5cclxuICB9XHJcblxyXG4gICAgbG9naW4oKTphbnl7XHJcbiAgICAvLyBjb25zdCBhdXRoVG9rZW4gPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoJ3Rva2VuJyk7XHJcbiAgICAvLyB2YXIgaGVhZGVyczogSHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcclxuICAgIC8vIGNvbnN0IHJlcSA9IHRoaXMuaHR0cC5nZXQodGhpcy5zZXJ2ZXJVcmwrXCIvR2V0VXNlckJ5SWRcIikuXHJcbiAgICAvLyAgIHN1YnNjcmliZSgocmVzID0+XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwic3VjY2VzcyAke3JldHVybiB0aGlzLmlzTG9nZ2VkfVwiICwgcmVzKVxyXG4gICAgLy8gICksIGVyciA9PiB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwiRXJyb3Igb2NjdXJlZCBcIiArIFwiIHN0YXR1czogXCIgKyBSZXNwb25zZS5lcnJvcik7XHJcbiAgICAvLyB9KTtcclxuICB9XHJcblxyXG4gICAgXHJcblxyXG59Il19