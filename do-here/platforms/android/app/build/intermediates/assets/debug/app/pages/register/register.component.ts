import { Component, OnInit } from '@angular/core';
import { UserService } from '~/@shared/services/user.service';
import { User } from '~/@shared/viewModels/userViewModel/userViewModel';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  email;


  constructor(private userService: UserService, private routerExtensions: RouterExtensions) {
    this.user = new User();
  }

  ngOnInit() {
    debugger;
  }

  submit() {
    this.userService.register(this.user);
  }

  navigateLogin() {
    this.routerExtensions.navigate(["./login"]);
  }


}
