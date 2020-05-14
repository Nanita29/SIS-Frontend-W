import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-material-cirugia',
  templateUrl: './material-cirugia.component.html',
  styleUrls: ['./material-cirugia.component.css']
})
export class MaterialCirugiaComponent implements OnInit {

  public material;
  public cirugia;
  public material_cirugia;
  id: any;
  public estado;
  API_ENDPOINT= 'http://www.tallerdesis.com:8000/api'

  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute) {

    this.obtener_material().subscribe((data) => {
      console.log(data);
      this.material=data;
    }, error => {
      console.log(error);
    
    });; 

    this.obtener_cirugia().subscribe((data) => {
      console.log(data);
      this.cirugia=data;
    }, error => {
      console.log(error);
    
    });; 

    this.obtener_material_cirugia().subscribe((data) => {
      console.log(data);
      this.material_cirugia=data;
    }, error => {
      console.log(error);
    
    });; 

    this.id =this.activatedRoute.snapshot.params['id'];
    if(this.id>0){
      this.estado=0;
      console.log(this.id);
    }else{
      this.estado=1;
    }
   }

  ngOnInit() {
  }

  obtener_material(){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/material/mostrar', {}, {headers: headers});
  }

  obtener_cirugia(){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/cirugia/getCirugias', {}, {headers: headers});
  }

  obtener_material_cirugia(){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/materialCirugia/mostrar', {}, {headers: headers});
  }

}
 