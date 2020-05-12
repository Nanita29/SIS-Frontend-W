import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Insumo } from '../interfaces/insumo';

@Component({
  selector: 'app-insumo',
  templateUrl: './insumo.component.html',
  styleUrls: ['./insumo.component.css']
})
export class InsumoComponent implements OnInit {

  public insumos;
  API_ENDPOINT= 'http://177.222.52.26:8000/api'
  insu: Insumo[];

  constructor(private httpClient: HttpClient) {

    this.obtener_insumos().subscribe((data) => {
      console.log(data);
      this.insumos=data;
    }, error => {
      console.log(error);
    
    });; 

   }

  ngOnInit() {
  } 

  obtener_insumos(){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/insumo/mostrar', {}, {headers: headers});

  }

}
