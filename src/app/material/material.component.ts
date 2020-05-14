import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  public materiales;
  API_ENDPOINT= 'http://www.tallerdesis.com:8000/api'

  constructor(private httpClient: HttpClient) { 

    this.obtener_materiales().subscribe((data) => {
      console.log(data);
      this.materiales=data;
    }, error => {
      console.log(error);
    
    });; 
  }
 
  ngOnInit() {
  }

  obtener_materiales(){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/vistas/materiales', {}, {headers: headers});

  }

}
