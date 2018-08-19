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
        // if(Response!=null){
        //   this.routerExtensions.navigate(["./login"]);
        // }
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLDZDQUErRDtBQUMvRCxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUlwRDtJQUlFLHFCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBSDVCLGNBQVMsR0FBRyxnQ0FBZ0MsQ0FBQztRQUM3QyxhQUFRLEdBQUcsNEJBQTRCLENBQUM7SUFFUixDQUFDO0lBRXpDLDhCQUFRLEdBQVIsVUFBUyxJQUFVO1FBQW5CLGlCQWlDQztRQWhDQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQztRQUNyRSxRQUFRLENBQUM7UUFFVCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsU0FBUyxjQUFXLEVBQUU7WUFDdkQsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ3BCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FFeEIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDeEIsSUFBSSxPQUFPLEdBQWdCLElBQUksa0JBQVcsRUFBRSxDQUFDO1lBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLDhCQUE4QixDQUFDLENBQUM7WUFDNUQsSUFBTSxRQUFRLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVE7WUFDM0Msa0ZBQWtGO1lBQ2xGLGtDQUFnQyxJQUFJLENBQUMsS0FBSyxrQkFBYSxJQUFJLENBQUMsUUFBVSxFQUN0RSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FFckIsQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFRO2dCQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNyQyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDbkQsQ0FBQyxFQUFFLFVBQUEsR0FBRztnQkFDSixPQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQ3RDLENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxFQUFFLFVBQUEsR0FBRztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsV0FBVyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvRCxDQUFDLENBQ0EsQ0FBQztRQUNBLHNCQUFzQjtRQUN0QixpREFBaUQ7UUFDakQsSUFBSTtJQUVSLENBQUM7SUF2Q1UsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUtlLGlCQUFVO09BSnpCLFdBQVcsQ0E0Q3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQTVDRCxJQTRDQztBQTVDWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3ZpZXdNb2RlbHMvdXNlclZpZXdNb2RlbC91c2VyVmlld01vZGVsXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5jb25zdCBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBzZXJ2ZXJVcmwgPSBcImh0dHA6Ly8xOTIuMTY4LjE0LjgyL2FwaS9Vc2Vyc1wiO1xyXG4gIHByaXZhdGUgVG9rZW5VcmwgPSBcImh0dHA6Ly8xOTIuMTY4LjE0LjgyL3Rva2VuXCI7XHJcbiAgcm91dGVyRXh0ZW5zaW9uczogYW55O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gIHJlZ2lzdGVyKHVzZXI6IFVzZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKFwieW91IGFyZSBnb2luZyB0byB1c2UgXCIgKyB1c2VyLmVtYWlsICsgXCIgYXMgeW91ciBFbWFpbFwiKTtcclxuICAgIGRlYnVnZ2VyO1xyXG5cclxuICAgIGNvbnN0IHJlcSA9IHRoaXMuaHR0cC5wb3N0KGAke3RoaXMuc2VydmVyVXJsfS9Qb3N0VXNlcmAsIHtcclxuICAgICAgdXNlcm5hbWU6IHVzZXIuZW1haWwsXHJcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxyXG4gICAgICBcclxuICAgIH0pLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3MhXCIpO1xyXG4gICAgICB2YXIgaGVhZGVyczogSHR0cEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcclxuICAgICAgaGVhZGVycy5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy11cmxlbmNvZGVkJyk7XHJcbiAgICAgIGNvbnN0IHRva2VuUmVxID0gdGhpcy5odHRwLnBvc3QodGhpcy5Ub2tlblVybCxcclxuICAgICAgICAvLyAgJ3tcImdyYW50X3R5cGU9cGFzc3dvcmQmdXNlcm5hbWU9XCInK3VzZXIuZW1haWwrJ1wiJnBhc3N3b3JkPVwiJyt1c2VyLnBhc3N3b3JkKyd9J1xyXG4gICAgICAgIGBncmFudF90eXBlPXBhc3N3b3JkJnVzZXJuYW1lPSR7dXNlci5lbWFpbH0mcGFzc3dvcmQ9JHt1c2VyLnBhc3N3b3JkfWAsXHJcbiAgICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzIH1cclxuXHJcbiAgICAgICkuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCcvdG9rZW4gLSBTdWNjZXNzJywgcmVzKTtcclxuICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJ0b2tlblwiLCByZXMuYWNjZXNzX3Rva2VuKTtcclxuICAgICAgfSwgZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCcvdG9rZW4gLSBFcnJvcicsIGVycilcclxuICAgICAgfSlcclxuICAgIH0sIGVyciA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igb2NjdXJlZCBcIiArIFwiIHN0YXR1czogXCIgKyBSZXNwb25zZS5lcnJvcik7XHJcbiAgICB9XHJcbiAgICApO1xyXG4gICAgICAvLyBpZihSZXNwb25zZSE9bnVsbCl7XHJcbiAgICAgIC8vICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi4vbG9naW5cIl0pO1xyXG4gICAgICAvLyB9XHJcblxyXG4gIH1cclxuXHJcbiAgLy8gIGxvZ2luKHVzZXI6VXNlcil7XHJcbiAgLy8gIGNvbnN0IHJlcSA9IHRoaXMuaHR0cC5nZXQodGhpcy5zZXJ2ZXJVcmwrXCIvR2V0VXNlckJ5SWRcIiwpXHJcbiAgLy8gIH1cclxufVxyXG4iXX0=