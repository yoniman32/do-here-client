import { OnInit, Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "pages",
    template: "<router-outlet></router-outlet>"
})
export class PagesComponent implements OnInit {

    constructor(private routerExtensions: RouterExtensions, private router: Router) {

    }

    ngOnInit(): void {
        debugger;
    }


}