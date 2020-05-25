import { Component, OnInit } from '@angular/core';
import {Cirugia} from '../interfaces/cirugia';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CirugiasService } from '../services/cirugias.service';

@Component({
  selector: 'app-cirugia-estado',
  templateUrl: './cirugia-estado.component.html',
  styleUrls: ['./cirugia-estado.component.css']
})
export class CirugiaEstadoComponent implements OnInit {

  cirugia:Cirugia={
    'id':null, 
    'id_paciente':null,
    'id_sala':null,
    'fechaIngreso':null,
    'fechaSalida':null,
    'fechaInternacion':null,
    'fechaInternacion_salida':null,
    'email_notif':null,
  };
  id: any;
  editing: boolean = false;
  public cirugias: Cirugia[];
  public route;
  API_ENDPOINT= 'http://www.tallerdesis.com:8000/api'

  constructor(private cirugiasService: CirugiasService, private activatedRoute: ActivatedRoute,private httpClient: HttpClient) {

    this.id =this.activatedRoute.snapshot.params['id'];
    if(this.id>0){
      this.mostrar_cirugia().subscribe((data) => {
        this.cirugia['id']=data[0]['id'];
        this.cirugia['id_paciente']=data[0]['id_paciente'];
        this.cirugia['id_sala']=data[0]['id_sala'];
        this.cirugia['fechaIngreso']=data[0]['fechaIngreso'];
        this.cirugia['fechaSalida']=data[0]['fechaSalida'];
      }, error => {
        console.log(error);
    
    });;
    }
    else{
    }

   }

  ngOnInit() {
  }

  mostrar_cirugia(){
    this.route="/cirugia/"+this.id+"";
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + this.route, {}, {headers: headers});

  }

}
