import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeRouting} from "./home.routing";
import { AjouterDossierComponent } from './ajouter-dossier/ajouter-dossier.component';
import { ListDossierComponent } from './list-dossier/list-dossier.component';
import { DetailsDossierComponent } from './details-dossier/details-dossier.component';
import { TrackerContComponent } from './tracker-cont/tracker-cont.component';
import {MapVisualisationComponent} from "./map-visualisation/map-visualisation.component";
import { ProfilComponent } from './profil/profil.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRouting,
  ],
  declarations: [ProfilComponent],
})
export class HomeModule { }
