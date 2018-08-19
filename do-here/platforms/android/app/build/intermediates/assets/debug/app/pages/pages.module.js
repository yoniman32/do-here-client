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
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                pages_route_1.PagesRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                pages_component_1.PagesComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                task_list_component_1.TaskListComponent
            ],
        })
    ], PagesModule);
    return PagesModule;
}());
exports.PagesModule = PagesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFnZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBQ2pELGdGQUE4RTtBQUM5RSxtREFBeUQ7QUFDekQsMkRBQXlEO0FBQ3pELHlEQUF1RDtBQUN2RCxpRUFBK0Q7QUFDL0QsMEVBQXdFO0FBQ3hFLDZFQUEwRTtBQWUxRTtJQUFBO0lBRUEsQ0FBQztJQUZZLFdBQVc7UUFidkIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsZ0NBQWtCO2dCQUNsQiw0QkFBWTthQUNmO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLGdDQUFjO2dCQUNkLGdDQUFjO2dCQUNkLHNDQUFpQjtnQkFDakIsdUNBQWlCO2FBQ3BCO1NBQ0osQ0FBQztPQUNXLFdBQVcsQ0FFdkI7SUFBRCxrQkFBQztDQUFBLEFBRkQsSUFFQztBQUZZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcbmltcG9ydCB7IFBhZ2VzUm91dGluZ01vZHVsZSB9IGZyb20gXCJ+L3BhZ2VzL3BhZ2VzLnJvdXRlXCI7XHJcbmltcG9ydCB7IFBhZ2VzQ29tcG9uZW50IH0gZnJvbSBcIn4vcGFnZXMvcGFnZXMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCJ+L0BzaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCJ+L3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gXCJ+L3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUYXNrTGlzdENvbXBvbmVudCB9IGZyb20gXCJ+L3BhZ2VzL3Rhc2stbGlzdC90YXNrLWxpc3QuY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgICAgICBQYWdlc1JvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgU2hhcmVkTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgUGFnZXNDb21wb25lbnQsXHJcbiAgICAgICAgTG9naW5Db21wb25lbnQsXHJcbiAgICAgICAgUmVnaXN0ZXJDb21wb25lbnQsXHJcbiAgICAgICAgVGFza0xpc3RDb21wb25lbnRcclxuICAgIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdlc01vZHVsZSAge1xyXG5cclxufSJdfQ==