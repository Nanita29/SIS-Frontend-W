import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../interfaces/user';


@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  
public pacientes;
  API_ENDPOINT= 'http://www.tallerdesis.com:8000/api'
  user: User[];
  constructor(private httpClient: HttpClient) {
    
    this.funciona().subscribe((data) => {
      console.log(data[0]);
      this.pacientes=data[0];
      console.log(length);
    }, error => {
      console.log(error);
    
    });; 

  }

  ngOnInit() {
  } 
  funciona(){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/userCreator', {}, {headers: headers});

  }
}
 