import { Component, OnInit, Input, ChangeDetectionStrategy, ViewChild, TemplateRef, DoCheck, AfterViewInit, OnDestroy, } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as $ from 'jquery';
import 'fullcalendar';
import * as moment from 'moment';
import { Cirugia } from '../interfaces/cirugia';
import { CirugiasService } from '../services/cirugias.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  
  /*template:'bootstrap',*/
})
export class CalendarComponent {

  API_ENDPOINT = 'http://www.tallerdesis.com:8000/api'
  cirugia: Cirugia[];
  public fecha;
  public hora;
  public titulo=[];
  public fechaIn=[];
  public fechaSal=[];
  public horaIn=[];
  public horaSal=[];
  public cirugias;
  public eventosData;
  valor={
    'id':null,
    'id_rol':null,
    'name':null,
  };
  public mensaje="";
  public errores="";
;
  constructor(private cirugiasService: CirugiasService, private httpClient: HttpClient) {

    this.obtener_usuario().subscribe((data) => {        
      this.valor['name']=(data['name']);
      this.valor['id']=(data['id']);
      this.valor['id_rol']=(data['id_rol']);
    }, error => {
      console.log(error);
    
    });; 

    
    this.mostrar_cirugias().subscribe((data) => {
      
      this.cirugias=data;
     
      for(var i = 0;i<this.cirugias.length;i++) { 
        this.titulo.push(this.cirugias[i]['id']);
        this.hora = this.cirugias[i]['fechaIngreso'].split("");
        this.hora = this.hora[11] + this.hora[12] +":"+ this.hora[14] + this.hora[15];
        this.horaIn.push(this.hora);

        this.hora = this.cirugias[i]['fechaSalida'].split("");
        this.hora = this.hora[11] + this.hora[12] +":"+ this.hora[14] + this.hora[15];
        this.horaSal.push(this.hora);

        this.fecha = this.cirugias[i]['fechaIngreso'].split("");
        this.fecha = this.fecha[0] + this.fecha[1] + this.fecha[2] + this.fecha[3] +"/"+ this.fecha[5] + 
          this.fecha[6] +"/"+ this.fecha[8] + this.fecha[9] +" "+ this.fecha[11] + this.fecha[12] +":"+ 
          this.fecha[14] + this.fecha[15];
        this.fechaIn.push(this.fecha);

        this.fecha = this.cirugias[i]['fechaSalida'].split("");
        this.fecha = this.fecha[0] + this.fecha[1] + this.fecha[2] + this.fecha[3] +"/"+ this.fecha[5] + 
          this.fecha[6] +"/"+ this.fecha[8] + this.fecha[9] +" "+ this.fecha[11] + this.fecha[12] +":"+ 
          this.fecha[14] + this.fecha[15];
          
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
        start: moment("", 'YYYY/MM/DD/ HH:MM'),
        end: moment("", 'YYYY/MM/DD/ HH:MM'),
        color: '#2CAABE',
        textColor: 'white'
        
      }
      
    ];
    for(var i = 0;i<this.cirugias.length;i++) { 
      this.eventosData.push (
        {
          "title": "Identificación cirugía: "+this.titulo[i] +"\n" + "Hora de inicio: "+ this.horaIn[i] +"\n" + "Hora fin: "+ this.horaSal[i],
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
        displayEventTime: false,
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },

        monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
        monthNamesShort: ['Ene','Febr','Marz','Abr','May','Jun','Jul','Agos','Sept','Oct','Nov','Dic'],
        dayNames: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
        dayNamesShort: ['Dom','Lun','Mar','Miér','Jue','Vie','Sáb'],
        
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

        eventClick: function (event, jsEvent, view) {
          //alert("nombre del evento" +event.title );
          $('#exampleModal').html(event.title);
          $('#ModalTitle').html(event.title); 
      },
        
        


      }
    );
  }
  ngOnInit() {
    //this.boton();
  }
  mostrar_cirugias() {
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/vistas/cirugias', {}, {headers: headers});
  }

  obtener_usuario(){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/auth/user', {}, {headers: headers});

  }

  cambiar_preparada(id){
    var data={
      'id_proceso':2, 
    };
    this.cirugiasService.cambiar(data,id).subscribe((data) => {
      this.mensaje=data["message"];
        this.errores=data["errores"];
        location.reload();
    }, error => {
        alert(error.error['message']);
    });
  }

  cambiar_espera(id){
    var data={
      'id_proceso':1, 
    };
    this.cirugiasService.cambiar(data,id).subscribe((data) => {
      this.mensaje=data["message"];
        this.errores=data["errores"];
        location.reload();
    }, error => {
        alert(error.error['message']);
    });
  }
}



