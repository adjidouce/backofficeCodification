import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../data.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    user = {
        username : "",
        password : ""
    };

  constructor(private router : Router , private dataService: DataService) { }

  ngOnInit() {

  }

  seConnecter(){
    this.dataService.login(this.user)
        .subscribe(
            data => {
              console.log(data);
              this.dataService.setTocken(data.id);
              this.dataService.setUser(data.user);
              this.router.navigate(["/home/main"])
            },
            error => {
              console.log(error);
            }
        );

  }

}
