"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var pages_route_1 = require("~/pages/pages.route");
var pages_component_1 = require("~/pages/pages.component");
var shared_module_1 = require("~/@shared/shared.module");
var login_component_1 = require("~/pages/login/login.component");
var register_component_1 = require("~/pages/register/register.component");
var task_list_component_1 = require("~/pages/task-list/task-list.component");
var forms_1 = require("nativescript-angular/forms");
var new_task_component_1 = require("~/pages/new-task/new-task.component");
var map_component_1 = require("~/pages/map/map.component");
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                pages_route_1.PagesRoutingModule,
                forms_1.NativeScriptFormsModule,
                shared_module_1.SharedModule,
            ],
            declarations: [
                pages_component_1.PagesComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                task_list_component_1.TaskListComponent,
                new_task_component_1.NewTaskComponent,
                map_component_1.MapComponent
            ],
        })
    ], PagesModule);
    return PagesModule;
}());
exports.PagesModule = PagesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFnZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBQ2pELGdGQUE4RTtBQUM5RSxtREFBeUQ7QUFDekQsMkRBQXlEO0FBQ3pELHlEQUF1RDtBQUN2RCxpRUFBK0Q7QUFDL0QsMEVBQXdFO0FBQ3hFLDZFQUEwRTtBQUMxRSxvREFBdUY7QUFDdkYsMEVBQXVFO0FBQ3ZFLDJEQUF5RDtBQTBCekQ7SUFBQTtJQUVBLENBQUM7SUFGWSxXQUFXO1FBckJ2QixlQUFRLENBQUM7WUFFTixPQUFPLEVBQUU7Z0JBRUwsd0NBQWtCO2dCQUNsQixnQ0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsNEJBQVk7YUFDZjtZQUNELFlBQVksRUFBRTtnQkFDVixnQ0FBYztnQkFDZCxnQ0FBYztnQkFDZCxzQ0FBaUI7Z0JBQ2pCLHVDQUFpQjtnQkFDakIscUNBQWdCO2dCQUNoQiw0QkFBWTthQUVmO1NBR0osQ0FBQztPQUNXLFdBQVcsQ0FFdkI7SUFBRCxrQkFBQztDQUFBLEFBRkQsSUFFQztBQUZZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcbmltcG9ydCB7IFBhZ2VzUm91dGluZ01vZHVsZSB9IGZyb20gXCJ+L3BhZ2VzL3BhZ2VzLnJvdXRlXCI7XHJcbmltcG9ydCB7IFBhZ2VzQ29tcG9uZW50IH0gZnJvbSBcIn4vcGFnZXMvcGFnZXMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCJ+L0BzaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCJ+L3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gXCJ+L3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUYXNrTGlzdENvbXBvbmVudCB9IGZyb20gXCJ+L3BhZ2VzL3Rhc2stbGlzdC90YXNrLWxpc3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLCBGT1JNU19ESVJFQ1RJVkVTIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE5ld1Rhc2tDb21wb25lbnQgfSBmcm9tIFwifi9wYWdlcy9uZXctdGFzay9uZXctdGFzay5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSBcIn4vcGFnZXMvbWFwL21hcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBcclxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICAgICAgUGFnZXNSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIFNoYXJlZE1vZHVsZSxcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBQYWdlc0NvbXBvbmVudCxcclxuICAgICAgICBMb2dpbkNvbXBvbmVudCxcclxuICAgICAgICBSZWdpc3RlckNvbXBvbmVudCxcclxuICAgICAgICBUYXNrTGlzdENvbXBvbmVudCxcclxuICAgICAgICBOZXdUYXNrQ29tcG9uZW50LFxyXG4gICAgICAgIE1hcENvbXBvbmVudFxyXG4gICAgICAgIFxyXG4gICAgXSxcclxuICBcclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdlc01vZHVsZSAge1xyXG5cclxufSJdfQ==