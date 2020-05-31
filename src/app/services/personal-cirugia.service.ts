import { Injectable } from '@angular/core';
import {Personal_cirugia} from '../interfaces/personal_cirugia'
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PersonalCirugiaService {
  API_ENDPOINT= 'http://www.tallerdesis.com:8000/api'; 

  constructor(private httpClient: HttpClient) { }
 
  save(datos){
    const headers = new HttpHeaders( {'Content-Type': 'application/json','X-Requested-With':'XMLHttpRequest', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    
    return this.httpClient.post(this.API_ENDPOINT + '/personalCirugia/crear/', datos, {headers: headers});
  }

  eliminar(id){
    const headers = new HttpHeaders( {'Content-Type': 'application/json','X-Requested-With':'XMLHttpRequest', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    var data;
    return this.httpClient.post(this.API_ENDPOINT + '/personalCirugia/eliminar/'+id,data, {headers: headers});

    
  }
}
