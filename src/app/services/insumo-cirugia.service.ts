import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InsumoCirugiaService {

  API_ENDPOINT= 'http://www.tallerdesis.com:8000/api';

  constructor(private httpClient: HttpClient) { }

  
  update(data){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.put(this.API_ENDPOINT + '/insumoCirugia/actualizar/'+data['id_insumo_cirugia'],data, {headers: headers});

  }

  agregar(data){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/insumoCirugia/crear',data, {headers: headers});

  }

  eliminar(id_insumo_cirugia){
    const headers = new HttpHeaders( {'Content-Type': 'application/json','X-Requested-With':'XMLHttpRequest', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    var data;
    return this.httpClient.post(this.API_ENDPOINT + '/insumoCirugia/eliminar/'+id_insumo_cirugia,data, {headers: headers});

    
  }
}
