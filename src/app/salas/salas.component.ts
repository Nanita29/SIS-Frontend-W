import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})
export class SalasComponent implements OnInit {

  public salasActivo: boolean;

  public salas;
  API_ENDPOINT= 'http://www.tallerdesis.com:8000/api'
  user: User[];
  constructor(private httpClient: HttpClient) {
    
    this.obtener_salas().subscribe((data) => {
      console.log(data);
      this.salas=data[0];
    }, error => {
      console.log(error);
    
    });;  

  }

  ngOnInit() {
  } 

  activarSalas(): void {
    this.salasActivo = true;
  }

  obtener_salas(){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/salas', {}, {headers: headers});

  }

}
