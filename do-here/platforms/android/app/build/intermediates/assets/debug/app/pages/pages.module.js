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
                new_task_component_1.NewTaskComponent
            ],
        })
    ], PagesModule);
    return PagesModule;
}());
exports.PagesModule = PagesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFnZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBQ2pELGdGQUE4RTtBQUM5RSxtREFBeUQ7QUFDekQsMkRBQXlEO0FBQ3pELHlEQUF1RDtBQUN2RCxpRUFBK0Q7QUFDL0QsMEVBQXdFO0FBQ3hFLDZFQUEwRTtBQUMxRSxvREFBcUU7QUFDckUsMEVBQXVFO0FBcUJ2RTtJQUFBO0lBRUEsQ0FBQztJQUZZLFdBQVc7UUFoQnZCLGVBQVEsQ0FBQztZQUVOLE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLGdDQUFrQjtnQkFDbEIsK0JBQXVCO2dCQUN2Qiw0QkFBWTthQUNmO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLGdDQUFjO2dCQUNkLGdDQUFjO2dCQUNkLHNDQUFpQjtnQkFDakIsdUNBQWlCO2dCQUNqQixxQ0FBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csV0FBVyxDQUV2QjtJQUFELGtCQUFDO0NBQUEsQUFGRCxJQUVDO0FBRlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgUGFnZXNSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIn4vcGFnZXMvcGFnZXMucm91dGVcIjtcclxuaW1wb3J0IHsgUGFnZXNDb21wb25lbnQgfSBmcm9tIFwifi9wYWdlcy9wYWdlcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSBcIn4vQHNoYXJlZC9zaGFyZWQubW9kdWxlXCI7XHJcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIn4vcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSBcIn4vcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRhc2tMaXN0Q29tcG9uZW50IH0gZnJvbSBcIn4vcGFnZXMvdGFzay1saXN0L3Rhc2stbGlzdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgTmV3VGFza0NvbXBvbmVudCB9IGZyb20gXCJ+L3BhZ2VzL25ldy10YXNrL25ldy10YXNrLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBpc0VuYWJsZWQsIGVuYWJsZUxvY2F0aW9uUmVxdWVzdCwgZ2V0Q3VycmVudExvY2F0aW9uLCB3YXRjaExvY2F0aW9uLCBkaXN0YW5jZSwgY2xlYXJXYXRjaCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcclxuXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgICAgICBQYWdlc1JvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICAgICAgU2hhcmVkTW9kdWxlLFxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIFBhZ2VzQ29tcG9uZW50LFxyXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxyXG4gICAgICAgIFJlZ2lzdGVyQ29tcG9uZW50LFxyXG4gICAgICAgIFRhc2tMaXN0Q29tcG9uZW50LFxyXG4gICAgICAgIE5ld1Rhc2tDb21wb25lbnRcclxuICAgIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdlc01vZHVsZSAge1xyXG5cclxufSJdfQ==