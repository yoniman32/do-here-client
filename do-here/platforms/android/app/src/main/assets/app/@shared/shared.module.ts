
import { NgModule, ModuleWithProviders, Injectable } from "@angular/core";
import { AUTH_PROVIDERS } from "~/app.routes";
import { UserService } from "~/@shared/services/user.service";
import { TaskService } from "~/@shared/services/task.service";
import { HTTP_INTERCEPTORS } from "../../node_modules/@angular/common/http";
import { AuthInterceptor } from "~/@shared/services/aute.interceptor";
@NgModule({
    declarations: [],
    exports: [],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
                ngModule: SharedModule,
                providers: [...AUTH_PROVIDERS, UserService,TaskService,
                   
            ]
        };
    }
}
