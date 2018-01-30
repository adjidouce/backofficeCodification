import { Component, OnInit } from '@angular/core';
import {HomeService} from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers : [HomeService]
})
export class HomeComponent implements OnInit {

  dataUser;
  dataUserError;
  userId = localStorage.getItem('userId');


  constructor(private homeService : HomeService) { }


  ngOnInit() {
    this.getHandleUser(this.userId);
    console.log(this.userId);
  }

  getHandleUser(id){
    console.log(id);
    this.homeService.getUser(id)
      .subscribe(
        data => this.handlegetUser(data),
        error => this.handlegetUserError(error)
      );
  }

  handlegetUser(data){
    console.log(data);
    this.dataUser = data;
  }


  handlegetUserError(error){
    this.dataUserError = error;
  }

}
