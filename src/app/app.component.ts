import {Component, OnInit} from '@angular/core';
import {DataService} from "./data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private router: Router, private dataService : DataService) { }
  ngOnInit()
  {
    if(this.dataService.isConnected()==true)
    {
      this.router.navigate(["/home/main"]);
    }
    else {
      this.router.navigate([""]);
    }
  }
}
