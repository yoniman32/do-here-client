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
        console.log(this.task.Description);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LXRhc2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmV3LXRhc2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGtGQUF3RTtBQVN4RTtJQUdFO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRSxJQUFJLG9CQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUYsbUNBQVEsR0FBUixjQUFhLENBQUM7SUFDWixpQ0FBTSxHQUFOO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBWFEsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUN6QyxDQUFDOztPQUNXLGdCQUFnQixDQWMxQjtJQUFELHVCQUFDO0NBQUEsQUFkSCxJQWNHO0FBZFUsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhc2sgfSBmcm9tICd+L0BzaGFyZWQvdmlld01vZGVscy90YXNrVmlld01vZGVsL3Rhc2tWaWV3TW9kZWwnO1xuaW1wb3J0IHsgaXNFbmFibGVkLCBlbmFibGVMb2NhdGlvblJlcXVlc3QsIGdldEN1cnJlbnRMb2NhdGlvbiwgd2F0Y2hMb2NhdGlvbiwgZGlzdGFuY2UsIGNsZWFyV2F0Y2ggfSBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1uZXctdGFzaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZXctdGFzay5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25ldy10YXNrLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmV3VGFza0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHRhc2s6VGFzaztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRhc2s9IG5ldyBUYXNrKCk7XG4gICB9XG5cbiAgbmdPbkluaXQoKSB7IH1cbiAgICBjcmVhdGUoKXtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMudGFzay5OYW1lKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMudGFzay5EZXNjcmlwdGlvbik7XG4gICAgfVxuXG4gICAgXG4gIH0iXX0=