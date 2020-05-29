import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../interfaces/user';


@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  
public doctores;
public pacientes;
public encargados;
valor={
  'id':null,
  'id_rol':null,
  'name':null,
};
  API_ENDPOINT= 'http://www.tallerdesis.com:8000/api'
  user: User[];
  constructor(private httpClient: HttpClient) {

    this.obtener_usuario().subscribe((data) => {        
      this.valor['name']=(data['name']);
      this.valor['id']=(data['id']);
      this.valor['id_rol']=(data['id_rol']);
    }, error => {
      console.log(error);
    
    });; 
    
    this.obtener_doctores().subscribe((data) => {
      console.log(data[0]);
      this.doctores=data[0];
      console.log(length);
    }, error => {
      console.log(error);
    
    });; 

    this.obtener_pacientes().subscribe((data) => {
      console.log(data[0]);
      this.pacientes=data[0];
      console.log(length);
    }, error => {
      console.log(error);
    
    });; 

    this.obtener_encargados().subscribe((data) => {
      console.log(data[0]);
      this.encargados=data[0];
      console.log(length);
    }, error => {
      console.log(error);
    
    });; 

  }

  ngOnInit() {
  } 
  obtener_doctores(){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/user/doctor', {}, {headers: headers});

  }
  obtener_pacientes(){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/user/paciente', {}, {headers: headers});

  }
  obtener_encargados(){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/user/encargado', {}, {headers: headers});

  }

  obtener_usuario(){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/auth/user', {}, {headers: headers});

  }

  
}
 