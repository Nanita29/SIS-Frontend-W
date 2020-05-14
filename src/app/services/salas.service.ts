import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Sala } from '../interfaces/sala';

@Injectable({
  providedIn: 'root'
})
export class SalasService {

  API_ENDPOINT= 'http://www.tallerdesis.com:8000/api'; 

  constructor(private httpClient: HttpClient) { }

  save(sala: Sala){
    const headers = new HttpHeaders( {'Content-Type': 'application/json','X-Requested-With':'XMLHttpRequest', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    console.log(sala);
    console.log(headers);
    return this.httpClient.post('http://177.222.52.26:8000/api/sala', sala, {headers: headers});
  }

  update(id,sala_e){
    console.log(sala_e);
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.put(this.API_ENDPOINT + '/sala/'+id, sala_e, {headers: headers});

  }
}

