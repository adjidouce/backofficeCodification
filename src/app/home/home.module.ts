import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRouting} from "./home.routing";
import {ChartModule} from "angular2-highcharts";

declare var require: any;

@NgModule({
  imports: [
    CommonModule,
    HomeRouting,
    ChartModule.forRoot(require('highcharts'))
  ],
  declarations: [],
})
export class HomeModule { }
