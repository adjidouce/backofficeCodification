import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRouting} from "./home.routing";
import { EtudiantComponent } from './etudiant/etudiant.component';
import {Ng2SmartTableModule} from "ng2-smart-table";
import {ChartModule} from "angular2-highcharts";
declare var require: any;

@NgModule({
  imports: [
    CommonModule,
    HomeRouting,
    Ng2SmartTableModule,
    ChartModule.forRoot(require('highcharts'))
  ],
  declarations: [EtudiantComponent],
})
export class HomeModule { }
