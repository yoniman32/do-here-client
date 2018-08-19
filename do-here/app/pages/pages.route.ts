import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ModuleWithProviders } from "@angular/core";
import { PagesComponent } from "~/pages/pages.component";
import { LoginComponent } from "~/pages/login/login.component";
import { RegisterComponent } from "~/pages/register/register.component";
import { AuthGuard } from "~/@shared/services/auth-guard.service";
import { TaskListComponent } from "~/pages/task-list/task-list.component";
import { NewTaskComponent } from "~/pages/new-task/new-task.component";

const PAGES_ROUTES = [
    {
        path: "", component: PagesComponent, children: [
            { path: "login", component: LoginComponent },
            { path: "register", component: RegisterComponent },
            { path: "task-list", canActivate: [AuthGuard], component: TaskListComponent },
            { path: "", redirectTo: "/task-list", pathMatch: "full" },
            { path: "new-task", canActivate: [AuthGuard], component: NewTaskComponent },
            { path: "new-task",  component: NewTaskComponent },
        ]
    },

];
//, canActivate:[AuthGuard]
export const PagesRoutingModule: ModuleWithProviders = NativeScriptRouterModule.forRoot(PAGES_ROUTES);