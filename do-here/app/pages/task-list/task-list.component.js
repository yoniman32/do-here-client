"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var TaskListComponent = /** @class */ (function () {
    function TaskListComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    TaskListComponent.prototype.ngOnInit = function () {
        debugger;
    };
    TaskListComponent.prototype.submit = function () {
        console.log("tap");
        this.routerExtensions.navigate(["../new-task"]);
    };
    TaskListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-task-list',
            templateUrl: './task-list.component.html',
            styleUrls: ['./task-list.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], TaskListComponent);
    return TaskListComponent;
}());
exports.TaskListComponent = TaskListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhc2stbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNEQ7QUFDNUQsc0RBQStEO0FBUy9EO0lBR0UsMkJBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUksQ0FBQztJQUUzRCxvQ0FBUSxHQUFSO1FBQ0UsUUFBUSxDQUFDO0lBQ1gsQ0FBQztJQUNELGtDQUFNLEdBQU47UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFYVSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzFDLENBQUM7eUNBSXNDLHlCQUFnQjtPQUgzQyxpQkFBaUIsQ0FnQjdCO0lBQUQsd0JBQUM7Q0FBQSxBQWhCRCxJQWdCQztBQWhCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCxWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC10YXNrLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFzay1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFzay1saXN0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGFza0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGRlYnVnZ2VyO1xuICB9XG4gIHN1Ym1pdCgpe1xuICAgIGNvbnNvbGUubG9nKFwidGFwXCIpO1xuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi4uL25ldy10YXNrXCJdKTtcbiAgfVxuXG5cblxuXG59XG4iXX0=