import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {NgModule} from "@angular/core";
import {MainComponent} from "./main/main.component";
import { AjouterDossierComponent } from './ajouter-dossier/ajouter-dossier.component';
import { ListDossierComponent } from './list-dossier/list-dossier.component';
import { DetailsDossierComponent } from './details-dossier/details-dossier.component';
import { TrackerContComponent } from './tracker-cont/tracker-cont.component';
import {MapVisualisationComponent} from "./map-visualisation/map-visualisation.component";
import {ProfilComponent} from "./profil/profil.component";
/**
 * Created by souaibou on 6/11/17.
 */
const HOME_ROUTES : Routes =[
  {
    path: 'home',
    component : HomeComponent,
    children : [
      {path: 'main', component: MainComponent},
      {path:'ajouter', component: AjouterDossierComponent},
      {path:'details', component: DetailsDossierComponent},
      {path:'list', component: ListDossierComponent},
      {path:'tracker', component: TrackerContComponent},
      {path:'tracker/details', component: MapVisualisationComponent},
      {path:'profil', component: ProfilComponent}
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
