"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("~/@shared/services/user.service");
var userViewModel_1 = require("~/@shared/viewModels/userViewModel/userViewModel");
var router_1 = require("nativescript-angular/router");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, routerExtensions) {
        this.userService = userService;
        this.routerExtensions = routerExtensions;
        this.user = new userViewModel_1.User();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        debugger;
    };
    RegisterComponent.prototype.submit = function () {
        console.log(this.user.email);
        this.userService.register(this.user);
        this.routerExtensions.navigate(["./login"]);
    };
    RegisterComponent.prototype.navigateLogin = function () {
        this.routerExtensions.navigate(["./login"]);
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.RouterExtensions])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGdFQUE4RDtBQUM5RCxrRkFBd0U7QUFDeEUsc0RBQStEO0FBUy9EO0lBS0UsMkJBQW9CLFdBQXdCLEVBQVUsZ0JBQWtDO1FBQXBFLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUN0RixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksb0JBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0UsUUFBUSxDQUFDO0lBQ1gsQ0FBQztJQUVELGtDQUFNLEdBQU47UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFHSCx5Q0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQXRCVSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQ3hDLENBQUM7eUNBTWlDLDBCQUFXLEVBQTRCLHlCQUFnQjtPQUw3RSxpQkFBaUIsQ0F5QjdCO0lBQUQsd0JBQUM7Q0FBQSxBQXpCRCxJQXlCQztBQXpCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICd+L0BzaGFyZWQvc2VydmljZXMvdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICd+L0BzaGFyZWQvdmlld01vZGVscy91c2VyVmlld01vZGVsL3VzZXJWaWV3TW9kZWwnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOZ01vZGVsLCBGb3Jtc01vZHVsZSB9IGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1yZWdpc3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWdpc3Rlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICB1c2VyOiBVc2VyO1xuICAgZW1haWw7XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGRlYnVnZ2VyO1xuICB9XG5cbiAgc3VibWl0KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMudXNlci5lbWFpbCk7XG4gICAgdGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpO1xuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi4vbG9naW5cIl0pO1xuICAgIH1cbiAgXG5cbiAgbmF2aWdhdGVMb2dpbigpIHtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiLi9sb2dpblwiXSk7XG4gIH1cblxuXG59XG4iXX0=