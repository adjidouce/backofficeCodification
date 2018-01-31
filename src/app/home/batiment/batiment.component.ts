import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";
import {ToasterService} from "angular2-toaster";

@Component({
  selector: 'app-batiment',
  templateUrl: './batiment.component.html',
  styleUrls: ['./batiment.component.css']
})
export class BatimentComponent implements OnInit {

  batiment={
    label:""
  }
  idCurrentBatiment="";

  batiments=[];
  etages=[
    {numero:0, demeurant:"", batimeentId:this.idCurrentBatiment}
  ];


  constructor(private dataService:DataService, private toasterService: ToasterService) { }

  ngOnInit() {
    this.dataService.get("Batiments")
      .subscribe(
        data=>{
          this.batiments =data;
        },
        error=>{
          console.log(error)
        }
      );
  }

  ajouterEtage()
  {
    this.etages.push({numero:this.etages.length+1, demeurant:"", batimeentId:this.idCurrentBatiment});
  }

  SupprimerEtage(){
    if(this.etages.length>1)
    {
      this.etages.pop();
    }
    else{
      this.toasterService.pop('error','Attention', 'Vous ne pouvez pas enlever le rez-de-chaussée');
    }
  }

  validetBatiment()
  {
    this.dataService.post("Batiments", this.batiment)
      .subscribe(
        data=>{
          console.log(data)
        },
        err=>{
          console.log(err)
        }
      );
  }

}
