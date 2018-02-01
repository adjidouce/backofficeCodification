import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../data.service";
import {ToasterService} from "angular2-toaster";

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

  constructor(private router : Router , private dataService: DataService,private toasterService: ToasterService) { }

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
              this.toasterService.pop('error','Echec de connexion', 'Email o mot de passeincorrecte');
              this.user.password="";
            }
        );

  }

}
