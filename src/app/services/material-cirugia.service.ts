import { Injectable } from '@angular/core';
import {Material_cirugia} from '../interfaces/material_cirugia'
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MaterialCirugiaService {
  API_ENDPOINT= 'http://www.tallerdesis.com:8000/api';

  constructor(private httpClient: HttpClient) { }

  update(data){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.put(this.API_ENDPOINT + '/materialCirugia/actualizar/'+data['id_material_cirugia'],data, {headers: headers});

  }

  agregar(data){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/materialCirugia/crear',data, {headers: headers});

  }

  eliminar(id_material_cirugia){
    const headers = new HttpHeaders( {'Content-Type': 'application/json','X-Requested-With':'XMLHttpRequest', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    var data;
    return this.httpClient.post(this.API_ENDPOINT + '/materialCirugia/eliminar/'+id_material_cirugia,data, {headers: headers});

    
  }
 
}
