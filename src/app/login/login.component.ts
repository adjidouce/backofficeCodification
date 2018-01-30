import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {

    user = {
        username : "",
        password : ""
    };

  constructor(private router : Router , private loginService : LoginService) { }

  ngOnInit() {

  }

  seConnecter(){
    this.loginService.login(this.user)
        .subscribe(
            data => this.handleUser(data),
            error => this.handleError(error)
        );

  }

  handleUser(data){
      //console.log(data);
      //this.router.navigate(['/home']);
      document.getElementById('home').click();
  }

  handleError(error){
      console.log(error);
      this.user.password = "";
  }



}
