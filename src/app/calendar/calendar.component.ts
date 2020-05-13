import { Component, OnInit, Input, ChangeDetectionStrategy, ViewChild, TemplateRef, DoCheck, AfterViewInit, OnDestroy, } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as $ from 'jquery';
import 'fullcalendar';
import * as moment from 'moment';
import { Cirugia } from '../interfaces/cirugia';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  
  /*template:'bootstrap',*/
})
export class CalendarComponent {

  API_ENDPOINT = 'http://177.222.52.26:8000/api'
  cirugia: Cirugia[];
  public fecha;
  public titulo=[];
  public fechaIn=[];
  public fechaSal=[];
  public cirugias;
  public eventosData;
;
  constructor(private httpClient: HttpClient) {

    
    this.mostrar_cirugias().subscribe((data) => {
      
      this.cirugias=data;
     
      for(var i = 0;i<this.cirugias.length;i++) { 
        this.titulo.push(this.cirugias[i]['id']);
        this.fecha = this.cirugias[i]['fechaIngreso'].split("");
        this.fecha = this.fecha[0] + this.fecha[1] + this.fecha[2] + this.fecha[3] + this.fecha[5] + this.fecha[6] + this.fecha[8] + this.fecha[9];
        this.fechaIn.push(this.fecha);

        this.fecha = this.cirugias[i]['fechaSalida'].split("");
        this.fecha = this.fecha[0] + this.fecha[1] + this.fecha[2] + this.fecha[3] + this.fecha[5] + this.fecha[6] + this.fecha[8] + this.fecha[9];
        this.fechaSal.push(this.fecha);

      }
    }, error => {
      console.log(error);
    });;    


  }


  boton() {
    /*for(var i = 0;i<this.cirugias.length;i++) { 
      console.log(this.fechaSal[i]);
    }*/
    

    this.eventosData=[
      {
        title: "",
        start: moment("", "YYYYMMDD"),
        color: '#2CAABE',
        textColor: 'white'
        
      }
      
    ];
    for(var i = 0;i<this.cirugias.length;i++) { 
      this.eventosData.push (
        {
          "title": "ID: "+this.titulo[i],
          "start": this.fechaIn[i],
          "end": this.fechaSal[i],
          "color": '#2CAABE',
          "textColor": 'white'
        }
      );
    }
    $('#full-calendar').fullCalendar(
      {
        events:this.eventosData,
        
        
        selectable: true,
        eventLimit: true,

        titleFormat: 'MMMM YYYY',
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },

        monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
        monthNamesShort: ['Ene','Febr','Marz','Abr','May','Jun','Jul','Agos','Sept','Oct','Nov','Dic'],
        dayNames: ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'],
        dayNamesShort: ['Lun','Mar','Miér','Jue','Vie','Sáb','Dom'],
        
        buttonText: {
            today: 'Hoy',
            month: 'Mes',
            week: 'Semana',
            day: 'Día'
        },
        buttonIcons: {
          prev: 'left-single-arrow',
          next: 'right-single-arrow',
          prevYear: 'left-double-arrow',
          nextYear: 'right-double-arrow'
        },
        
        views: {
            agenda: {
              eventLimit: 2
            }
        },
        allDaySlot: false,
        slotDuration: moment.duration('00:15:00'),
        slotLabelInterval: moment.duration('01:00:00'),
        firstDay: 1,
        selectHelper: true,
        


      }
    );
  }
  ngOnInit() {
    //this.boton();
  }
  mostrar_cirugias() {
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/cirugia/getCirugias', {}, {headers: headers});


  }
}



