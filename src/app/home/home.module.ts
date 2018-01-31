import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRouting} from "./home.routing";
import { EtudiantComponent } from './etudiant/etudiant.component';
import {Ng2SmartTableModule} from "ng2-smart-table";

@NgModule({
  imports: [
    CommonModule,
    HomeRouting,
    Ng2SmartTableModule
  ],
  declarations: [EtudiantComponent],
})
export class HomeModule { }
