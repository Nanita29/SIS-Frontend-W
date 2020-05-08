import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Personal } from '../interfaces/personal';

@Component({
  selector: 'app-personal-cirugia',
  templateUrl: './personal-cirugia.component.html',
  styleUrls: ['./personal-cirugia.component.css']
})
export class PersonalCirugiaComponent implements OnInit {

  public valor;
  public cargo;
  API_ENDPOINT= 'http://177.222.52.26:8000/api'

  constructor(private httpClient: HttpClient) { 
    this.obtener_personal().subscribe((data) => {
      console.log(data);
      this.valor=data;
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
    return this.httpClient.post(this.API_ENDPOINT + '/personal/mostrar', {}, {headers: headers});

  }

}
