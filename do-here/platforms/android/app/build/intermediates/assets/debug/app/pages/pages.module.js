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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFnZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBQ2pELGdGQUE4RTtBQUM5RSxtREFBeUQ7QUFDekQsMkRBQXlEO0FBQ3pELHlEQUF1RDtBQUN2RCxpRUFBK0Q7QUFDL0QsMEVBQXdFO0FBQ3hFLDZFQUEwRTtBQUMxRSxvREFBcUU7QUFDckUsMEVBQXVFO0FBQ3ZFLDJEQUF5RDtBQXNCekQ7SUFBQTtJQUVBLENBQUM7SUFGWSxXQUFXO1FBbEJ2QixlQUFRLENBQUM7WUFFTixPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQixnQ0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsNEJBQVk7YUFDZjtZQUNELFlBQVksRUFBRTtnQkFDVixnQ0FBYztnQkFDZCxnQ0FBYztnQkFDZCxzQ0FBaUI7Z0JBQ2pCLHVDQUFpQjtnQkFDakIscUNBQWdCO2dCQUNoQiw0QkFBWTthQUVmO1NBQ0osQ0FBQztPQUNXLFdBQVcsQ0FFdkI7SUFBRCxrQkFBQztDQUFBLEFBRkQsSUFFQztBQUZZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcbmltcG9ydCB7IFBhZ2VzUm91dGluZ01vZHVsZSB9IGZyb20gXCJ+L3BhZ2VzL3BhZ2VzLnJvdXRlXCI7XHJcbmltcG9ydCB7IFBhZ2VzQ29tcG9uZW50IH0gZnJvbSBcIn4vcGFnZXMvcGFnZXMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCJ+L0BzaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCJ+L3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gXCJ+L3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUYXNrTGlzdENvbXBvbmVudCB9IGZyb20gXCJ+L3BhZ2VzL3Rhc2stbGlzdC90YXNrLWxpc3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE5ld1Rhc2tDb21wb25lbnQgfSBmcm9tIFwifi9wYWdlcy9uZXctdGFzay9uZXctdGFzay5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSBcIn4vcGFnZXMvbWFwL21hcC5jb21wb25lbnRcIjtcclxuXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgICAgICBQYWdlc1JvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICAgICAgU2hhcmVkTW9kdWxlLFxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIFBhZ2VzQ29tcG9uZW50LFxyXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxyXG4gICAgICAgIFJlZ2lzdGVyQ29tcG9uZW50LFxyXG4gICAgICAgIFRhc2tMaXN0Q29tcG9uZW50LFxyXG4gICAgICAgIE5ld1Rhc2tDb21wb25lbnQsXHJcbiAgICAgICAgTWFwQ29tcG9uZW50XHJcbiAgICAgICAgXHJcbiAgICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnZXNNb2R1bGUgIHtcclxuXHJcbn0iXX0=