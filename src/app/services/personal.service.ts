import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Personal } from '../interfaces/personal';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  API_ENDPOINT= 'http://177.222.52.26:8000/api'; 

  constructor(private httpClient: HttpClient) { }

  save(personal: Personal){
    const headers = new HttpHeaders( {'Content-Type': 'application/json','X-Requested-With':'XMLHttpRequest', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    console.log(personal);
    console.log(headers);
    return this.httpClient.post(this.API_ENDPOINT + '/personal/crear', personal, {headers: headers});
  }

  update(id,personal_e){
    console.log(personal_e);
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.put(this.API_ENDPOINT + '/personal/actualizar/'+id, personal_e, {headers: headers});

  }
}
