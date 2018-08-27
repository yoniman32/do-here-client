import { Component, OnInit } from '@angular/core';
import { UserService } from '~/@shared/services/user.service';
import { User } from '~/@shared/viewModels/userViewModel/userViewModel';
import { RouterExtensions } from 'nativescript-angular/router';
import { NgModel, FormsModule } from '../../../node_modules/@angular/forms';

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
    console.log(this.user.email);
    this.userService.register(this.user);
      this.routerExtensions.navigate(["./task-list"]);
    }
  

  navigateLogin() {
    this.routerExtensions.navigate(["./login"]);
  }


}
