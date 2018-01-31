import {AfterViewInit, Component, OnInit} from '@angular/core';
import {DataService} from "../../data.service";
declare var $:any;

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css'],
  providers: [DataService]
})
export class EtudiantComponent implements OnInit,AfterViewInit {

  settingsEtudiants = {
    columns: {
      matricule: {
        title: 'Matricule'
      },
      prenom: {
        title: 'Prenom'
      },
      nom: {
        title: 'Nom'
      },
      departement: {
        title: 'Departement'
      },
      option1: {
        title: 'Option'
      },
      cycle1: {
        title: 'Cycle'
      }

    },
    actions: {
      edit : false,
      add : false,
      delete : false
    }
  };
  dataEtudiant = [
    {
      matricule: '',
      prenom: '',
      nom:'',
      option: {
        label:'',
        departement:{
          label:''
        }
      },
      cycle:{
        label:''
      },
      niveau:{
        label:''
      }
    }
  ];
  NombreEtudiants = 0;
  NombreEtudiantCodifier = 0;
  NombreEtudiantReserver = 0;
  constructor(public dataService:DataService) {
      let eventSource = new window['EventSource']("http://api-codification.herokuapp.com/api/etudiants/change-stream? format=change-stream");
       eventSource.addEventListener('data', function(msg) {
       let raw = msg.data;
       let data = JSON.parse(raw);
       console.log(data); // => change obj
       document.getElementById('begin').click();
     });
  }

  ngOnInit() {
    this.getAllEtudiant();
  }

  ngAfterViewInit(){

  }

  getAllEtudiant(){
    this.dataService.get('etudiants'+'?filter='+'{"include":[{"option":"departement"},"cycle","niveau"]}')
      .subscribe(
        data => {
          console.log(data);
          this.NombreEtudiants = data.length;
          this.dataEtudiant = data;
          this.dataEtudiant.forEach(function (value) {
            console.log(value);
            value['departement'] = value.option.departement.label;
            value['option1'] = value.option.label;
            value['cycle1'] = value.cycle.label;
          });
        },
        error => console.log(error)
      );
  }

}
