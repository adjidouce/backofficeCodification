import {AfterViewInit, Component, OnInit} from '@angular/core';
import {DataService} from "../../data.service";
import * as Highcharts from "Highcharts";
declare var $: any;

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css'],
  providers: [DataService]
})
export class EtudiantComponent implements OnInit, AfterViewInit {

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
      edit: false,
      add: false,
      delete: false
    }
  };
  dataEtudiant = [
    {
      matricule: '',
      prenom: '',
      nom: '',
      option: {
        label: '',
        departement: {
          label: ''
        }
      },
      cycle: {
        label: ''
      },
      niveau: {
        label: ''
      }
    }
  ];
  NombreEtudiants = 0;
  NombreEtudiantCodifier = 0;
  NombreEtudiantReserver = 0;
  options: Object;
  options1: Object;
  etudiantOfOptions= [];

  constructor(public dataService: DataService) {
    let eventSource = new window['EventSource']("http://api-codification.herokuapp.com/api/etudiants/change-stream? format=change-stream");
    eventSource.addEventListener('data', function (msg) {
      let raw = msg.data;
      let data = JSON.parse(raw);
      console.log(data); // => change obj
      document.getElementById('begin').click();
    });

    this.options = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Etudiants / Départements'
      },
      subtitle: {
        text: 'Statistiques des étudiants par rapport aux départements'
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        title: {
          text: 'Total percent étudiant'
        }

      },
      legend: {
        enabled: true
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y:.1f}%'
          }
        }
      },

      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
      },

      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: this.etudiantOfOptions
      }],
      drilldown: {
        series: []
      }
    };
    this.options1 = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Browser market shares January, 2015 to May, 2015'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {}
          }
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
          name: 'IE',
          y: 56.33
        }, {
          name: 'Chrome',
          y: 24.03,
          sliced: true,
          selected: true
        }, {
          name: 'Firefox',
          y: 10.38
        }, {
          name: 'Safari',
          y: 4.77
        }, {
          name: 'Opera',
          y: 0.91
        }, {
          name: 'Other',
          y: 0.2
        }]
      }]
    }
  }

  ngOnInit() {
    this.getAllEtudiant();
    this.getAllOptions();
  }

  ngAfterViewInit() {

  }

  getAllEtudiant() {
    this.dataService.get('etudiants' + '?filter=' + '{"include":[{"option":"departement"},"cycle","niveau"]}')
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

  getAllOptions(){
    this.dataService.get('Options')
      .subscribe(
        data => {
          //console.log(data);
          this.handleOptions(0,data);
        },
        error => console.log(error)
      )
  }

  handleOptions(debut,options){
    if(debut == options.length -1){
      this.dataService.get('Options/'+options[debut].id+'/etudiants')
        .subscribe(
          data => {
            this.etudiantOfOptions.push({name:options[debut].label,y:data.length,drilldown:options[debut].label});
            console.log(this.etudiantOfOptions);
            //this.options.series[0].data.push({name:options[debut].label,y:data.length,drilldown:options[debut].label});
          },
          error => console.log(error)
        )
    }else{
      this.dataService.get('Options/'+options[debut].id+'/etudiants')
        .subscribe(
          data => {
            this.etudiantOfOptions.push({name:options[debut].label,y:data.length,drilldown:options[debut].label});
          },
          error => console.log(error)
        )
      this.handleOptions(debut+1,options);
    }
  }



}
