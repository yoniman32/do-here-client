import { Component, OnInit } from '@angular/core';
import { UserService } from '~/@shared/services/user.service'
import { User } from '~/@shared/viewModels/userViewModel/userViewModel';
import { RouterExtensions } from 'nativescript-angular/router';
@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  email;


  constructor(private userService: UserService, private routerExtensions: RouterExtensions) {
    this.user = new User();
  }

  ngOnInit() {
    debugger;
  }

  submit() {
console.log("login");  }

  navigateRegister(){
    this.routerExtensions.navigate(["./register"]);
  }



}
