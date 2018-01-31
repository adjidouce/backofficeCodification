import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {NgModule} from "@angular/core";
import {MainComponent} from "./main/main.component";
import {EtudiantComponent} from "./etudiant/etudiant.component";
import {BatimentComponent} from "./batiment/batiment.component";
/**
 * Created by souaibou on 6/11/17.
 */
const HOME_ROUTES : Routes =[
  {
    path: 'home',
    component : HomeComponent,
    children : [
      {path: 'main', component: MainComponent},
      {path: 'etudiant', component: EtudiantComponent},
      {path: 'batiments', component: BatimentComponent}
    ]
  }

];
@NgModule({
  imports: [
    RouterModule.forChild(HOME_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRouting {}
