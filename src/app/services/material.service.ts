import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Material} from '../interfaces/material';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  API_ENDPOINT= 'http://177.222.52.26:8000/api'; 
  
  constructor(private httpClient: HttpClient) { 

  }

  save(material: Material){
    const headers = new HttpHeaders( {'Content-Type': 'application/json','X-Requested-With':'XMLHttpRequest', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    console.log(material);
    console.log(headers);
    return this.httpClient.post(this.API_ENDPOINT + '/material/crear', material, {headers: headers});
  }

  update(id,material_e){
    console.log(material_e);
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.put(this.API_ENDPOINT + '/material/actualizar/'+id, material_e, {headers: headers});

  }
}
