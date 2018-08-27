"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var taskViewModel_1 = require("~/@shared/viewModels/taskViewModel/taskViewModel");
var router_1 = require("nativescript-angular/router");
var NewTaskComponent = /** @class */ (function () {
    function NewTaskComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.task = new taskViewModel_1.Task();
    }
    NewTaskComponent.prototype.ngOnInit = function () { };
    NewTaskComponent.prototype.create = function () {
        console.log(this.task.Name);
        console.log(this.task.Description);
    };
    NewTaskComponent.prototype.moveToMap = function () {
        console.log("tap");
        this.routerExtensions.navigate(["../map"]);
    };
    NewTaskComponent.prototype.beck = function () {
        this.routerExtensions.navigate(["../task-list"]);
    };
    NewTaskComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-new-task',
            templateUrl: './new-task.component.html',
            styleUrls: ['./new-task.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], NewTaskComponent);
    return NewTaskComponent;
}());
exports.NewTaskComponent = NewTaskComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LXRhc2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmV3LXRhc2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGtGQUF3RTtBQUN4RSxzREFBK0Q7QUFRL0Q7SUFHRSwwQkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDcEQsSUFBSSxDQUFDLElBQUksR0FBRSxJQUFJLG9CQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUYsbUNBQVEsR0FBUixjQUFhLENBQUM7SUFDWixpQ0FBTSxHQUFOO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsb0NBQVMsR0FBVDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNELCtCQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUVuRCxDQUFDO0lBcEJRLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDekMsQ0FBQzt5Q0FJc0MseUJBQWdCO09BSDNDLGdCQUFnQixDQXFCMUI7SUFBRCx1QkFBQztDQUFBLEFBckJILElBcUJHO0FBckJVLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnfi9Ac2hhcmVkL3ZpZXdNb2RlbHMvdGFza1ZpZXdNb2RlbC90YXNrVmlld01vZGVsJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtbmV3LXRhc2snLFxuICB0ZW1wbGF0ZVVybDogJy4vbmV3LXRhc2suY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZXctdGFzay5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5ld1Rhc2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB0YXNrOlRhc2s7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgdGhpcy50YXNrPSBuZXcgVGFzaygpO1xuICAgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG4gICAgY3JlYXRlKCl7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnRhc2suTmFtZSk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnRhc2suRGVzY3JpcHRpb24pO1xuICAgIH1cblxuICAgIG1vdmVUb01hcCgpe1xuICAgICAgY29uc29sZS5sb2coXCJ0YXBcIik7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIuLi9tYXBcIl0pO1xuICAgIH1cbiAgICBiZWNrKCl7XG4gICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiLi4vdGFzay1saXN0XCJdKTtcbiAgXG4gICAgfVxuICB9Il19