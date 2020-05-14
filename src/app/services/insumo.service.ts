import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Insumo} from '../interfaces/insumo';

@Injectable({
  providedIn: 'root'
})
export class InsumoService {

  API_ENDPOINT= 'http://www.tallerdesis.com:8000/api'; 

  constructor(private httpClient: HttpClient) { }

  save(insumo: Insumo){
    const headers = new HttpHeaders( {'Content-Type': 'application/json','X-Requested-With':'XMLHttpRequest', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    console.log(insumo);
    console.log(headers);
    return this.httpClient.post(this.API_ENDPOINT + '/insumo/crear', insumo, {headers: headers});
  }

  update(id,insumo_e){
    console.log(insumo_e);
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.put(this.API_ENDPOINT + '/insumo/actualizar/'+id, insumo_e, {headers: headers});

  }

}
