"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_component_1 = require("./app.component");
var router_1 = require("nativescript-angular/router");
var http_client_1 = require("nativescript-angular/http-client");
var shared_module_1 = require("~/@shared/shared.module");
var pages_module_1 = require("~/pages/pages.module");
var app_routes_1 = require("~/app.routes");
var forms_1 = require("nativescript-angular/forms");
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule }from "nativescript-angular/forms";
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            imports: [
                http_client_1.NativeScriptHttpClientModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(app_routes_1.APP_ROUTES),
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                shared_module_1.SharedModule.forRoot(),
                pages_module_1.PagesModule,
            ],
            declarations: [app_component_1.AppComponent,],
            providers: [],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNEY7QUFDNUYsZ0ZBQThFO0FBQzlFLGlEQUErQztBQUMvQyxzREFBdUU7QUFFdkUsZ0VBQWdGO0FBQ2hGLHlEQUF1RDtBQUN2RCxxREFBbUQ7QUFDbkQsMkNBQTBDO0FBQzFDLG9EQUFxRTtBQUtyRSwyRUFBMkU7QUFDM0UsdUVBQXVFO0FBRXZFLDZFQUE2RTtBQUM3RSxzRUFBc0U7QUFnQnRFO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUFmckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUN6QixPQUFPLEVBQUU7Z0JBQ0wsMENBQTRCO2dCQUM1QixpQ0FBd0I7Z0JBQ3hCLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyx1QkFBVSxDQUFDO2dCQUM1Qyx3Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsNEJBQVksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3RCLDBCQUFXO2FBQ2Q7WUFDRCxZQUFZLEVBQUUsQ0FBQyw0QkFBWSxFQUFFO1lBQzdCLFNBQVMsRUFBRSxFQUFFO1lBQ2IsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7U0FDOUIsQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BLCBJbmplY3RhYmxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCJ+L0BzaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xuaW1wb3J0IHsgUGFnZXNNb2R1bGUgfSBmcm9tIFwifi9wYWdlcy9wYWdlcy5tb2R1bGVcIjtcbmltcG9ydCB7IEFQUF9ST1VURVMgfSBmcm9tIFwifi9hcHAucm91dGVzXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBBdXRoSW50ZXJjZXB0b3J9IGZyb20gXCJ+L0BzaGFyZWQvc2VydmljZXMvYXV0ZS5pbnRlcmNlcHRvclwiO1xuXG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfWZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzICBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEhUVFAgd3JhcHBlclxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KEFQUF9ST1VURVMpLFxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBTaGFyZWRNb2R1bGUuZm9yUm9vdCgpLFxuICAgICAgICBQYWdlc01vZHVsZSxcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW0FwcENvbXBvbmVudCxdLFxuICAgIHByb3ZpZGVyczogW10sXG4gICAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==