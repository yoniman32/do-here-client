"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var taskViewModel_1 = require("~/@shared/viewModels/taskViewModel/taskViewModel");
var NewTaskComponent = /** @class */ (function () {
    function NewTaskComponent() {
        this.task = new taskViewModel_1.Task();
    }
    NewTaskComponent.prototype.ngOnInit = function () { };
    NewTaskComponent.prototype.create = function () {
        console.log(this.task.Name);
    };
    NewTaskComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-new-task',
            templateUrl: './new-task.component.html',
            styleUrls: ['./new-task.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], NewTaskComponent);
    return NewTaskComponent;
}());
exports.NewTaskComponent = NewTaskComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LXRhc2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmV3LXRhc2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGtGQUF3RTtBQVF4RTtJQUVFO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRSxJQUFJLG9CQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUYsbUNBQVEsR0FBUixjQUFhLENBQUM7SUFDZCxpQ0FBTSxHQUFOO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzdCLENBQUM7SUFUVSxnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3pDLENBQUM7O09BQ1csZ0JBQWdCLENBVTVCO0lBQUQsdUJBQUM7Q0FBQSxBQVZELElBVUM7QUFWWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gJ34vQHNoYXJlZC92aWV3TW9kZWxzL3Rhc2tWaWV3TW9kZWwvdGFza1ZpZXdNb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1uZXctdGFzaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZXctdGFzay5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25ldy10YXNrLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmV3VGFza0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHRhc2s6VGFzaztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50YXNrPSBuZXcgVGFzaygpO1xuICAgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG4gIGNyZWF0ZSgpe1xuICAgIGNvbnNvbGUubG9nKHRoaXMudGFzay5OYW1lKVxuICB9XG59XG4iXX0=