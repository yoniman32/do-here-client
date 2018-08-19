import { AuthGuard } from "~/@shared/services/auth-guard.service";

export const AUTH_PROVIDERS = [
    AuthGuard
];
export const APP_ROUTES = [
    { path: "", redirectTo: "/pages", pathMatch: "full" },
    { path: "**", redirectTo: "" },
];