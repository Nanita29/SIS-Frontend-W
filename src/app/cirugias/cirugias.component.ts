import { Component, OnInit } from '@angular/core';
import {Cirugia} from '../interfaces/cirugia';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CirugiasService } from '../services/cirugias.service';

@Component({
  selector: 'app-cirugias',
  templateUrl: './cirugias.component.html',
  styleUrls: ['./cirugias.component.css']
}) 
export class CirugiasComponent implements OnInit {

  cirugia:Cirugia={
    'id':null, 
    'id_paciente':null,
    'id_sala':null,
    'fechaIngreso':null,
    'fechaSalida':null,
    'fechaInternacion':null,
    'fechaInternacion_salida':null,
    'id_proceso':null,
    'email_notif':null,
  };

  cirugia_e:Cirugia={
    'id':null,
    'id_paciente':null,
    'id_sala':null,
    'fechaIngreso':null,
    'fechaSalida':null,
    'fechaInternacion':null,
    'fechaInternacion_salida':null,
    'id_proceso':null,
    'email_notif':null,
  };

  valor={
    'id':null,
    'id_rol':null,
    'name':null,
  };

  id: any;
  editing: boolean = false;
  public cirugias: Cirugia[];
  public datitos;
  public route;
  public estado=0;
  public salas;
  public procesos;
  public pacientes;
  public mensaje="";
  public errores="";
  API_ENDPOINT= 'http://www.tallerdesis.com:8000/api'

  constructor(private cirugiasService: CirugiasService, private activatedRoute: ActivatedRoute,private httpClient: HttpClient) {

    this.obtener_usuario().subscribe((data) => {        
      this.valor['name']=(data['name']);
      this.valor['id']=(data['id']);
      this.valor['id_rol']=(data['id_rol']);
    }, error => {
      console.log(error);
    
    });; 

    this.obtener_salas().subscribe((data) => {
      this.salas=data[0];
    }, error => {
      console.log(error);
    
    });;  

    this.obtener_pacientes().subscribe((data) => {
      this.pacientes=data[0];
    }, error => {
      console.log(error);
    
    });;  

    this.obtener_proceso().subscribe((data) => {
      this.procesos=data;
    }, error => {
      console.log(error);
    
    });; 

    this.id =this.activatedRoute.snapshot.params['id'];
    if(this.id>0){
      this.estado=0;
      this.recdat().subscribe((data) => {
        this.cirugia_e['id_paciente']=data[0]['id_paciente'];
        this.cirugia_e['id_sala']=data[0]['id_sala'];
        this.cirugia_e['fechaIngreso']=data[0]['fechaIngreso'];
        this.cirugia_e['fechaSalida']=data[0]['fechaSalida'];
        this.cirugia_e['id_proceso']=data[0]['id_proceso'];
        this.datitos=data; 
      }, error => {
        console.log(error);
    
    });;
    }
    else{
      this.estado=1;
    }
    
   }

  ngOnInit() {
  } 

  registrarCirugia(){
    this.cirugiasService.save(this.cirugia).subscribe((data) => {
      this.mensaje=data["message"];
        this.errores=data["errores"];
    }, error => {
        alert(error.error['message']);
    });
  }

  update(){
    this.cirugiasService.update(this.id,this.cirugia_e).subscribe((data) => {
      this.mensaje=data["message"];
        this.errores=data["errores"];
    }, error => {
        alert(error.error['message']);
    });
  }

  
  recdat(){
    this.route="/cirugia/"+this.id+"";
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + this.route, {}, {headers: headers});

  }

  obtener_salas(){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/salas', {}, {headers: headers});

  }

  obtener_pacientes(){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/userCreator', {}, {headers: headers});

  }

  obtener_proceso(){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/proceso/mostrar', {}, {headers: headers});

  }

  obtener_usuario(){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/auth/user', {}, {headers: headers});

  }

}
