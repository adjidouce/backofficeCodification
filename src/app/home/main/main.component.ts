import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  nbCodification=0;
  nbReservation=0;
  batiments:any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.initialisation();
    this.dataService.post("Etudiants", {email:"b@a.a", password:"pass"})
      .subscribe(
        data=>{
          console.log(data)
        },
        err=>{
          console.log(err)
        }
      );
  }

  initialisation()
  {
    this.dataService.get("Positions/count?filter=" + encodeURIComponent('{"where":{"status":"Reserver"}}'))
      .subscribe(
        data=> {
          this.nbCodification = data.count;
          document.getElementById("reservation")["data-to"]=12;
        },
        err=> {
          console.log(err)
        }
      );

    this.dataService.get("Positions/count?filter=" + encodeURIComponent('{"where":{"status":"Codifier"}}'))
      .subscribe(
        data=> this.nbReservation=data.count,
        err=> console.log(err)
      );
    this.getAllbatimentsWithElements();
  }

  getAllbatimentsWithElements()
  {
    this.dataService.get('Batiments?filter=' + encodeURIComponent('{"include":{"etages": "chambres"}}'))
      .subscribe(
        data=>{
          console.log(data);
          this.batiments = data;
        },
        err=>{
          console.log(err);
        }
      );
  }

}
