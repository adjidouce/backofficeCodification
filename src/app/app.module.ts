import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './home/main/main.component';
import {routing} from "./app.routing";
import {HomeModule} from "./home/home.module";
import {AgmCoreModule} from "angular2-google-maps/core";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {FormsModule} from "@angular/forms";
import {DataService} from "./data.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HomeModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey : "AIzaSyDGknNvSyW4ga2fcdw0lJIvh9nmwKY02hY",
      libraries: ["places"]//'AIzaSyBUneV4-iX7nHDmSnKluSse6w7_rnbHZEI'
    }),
    Ng2SmartTableModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
