
import { NgModule, ModuleWithProviders } from "@angular/core";
import { AUTH_PROVIDERS } from "~/app.routes";
import { UserService } from "./services/user.service";

@NgModule({
    declarations: [],
    exports: [],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [...AUTH_PROVIDERS, UserService]
        };
    }
}
