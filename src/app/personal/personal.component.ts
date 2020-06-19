import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Personal } from '../interfaces/personal';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  public personals;
  public cargo;
  API_ENDPOINT= 'http://www.tallerdesis.com:8000/api'
  user: Personal[];
 
  constructor(private httpClient: HttpClient) { 
    this.obtener_personal().subscribe((data) => {
      console.log(data);
      this.personals=data;
      /* for(var i = 0;i<this.valor.length;i++) { 
        this.cargo = this.valor[i]['id_rol']
        if (this.cargo[i]=="1"){
          this.cargo=="enfermero"
        }
      }  */
    }, error => {
      console.log(error);
    
    });; 

    
  }

  ngOnInit() {
  }

  obtener_personal(){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/vistas/personal', {}, {headers: headers});

  }

}
