import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Personal } from '../interfaces/personal';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personal-cirugia',
  templateUrl: './personal-cirugia.component.html',
  styleUrls: ['./personal-cirugia.component.css']
})
export class PersonalCirugiaComponent implements OnInit {

  public personal;
  public cirugia;
  public personal_cirugia;
  public route;
  public personal_en;
  id: any;
  public estado;
  datos=[1,2,4];

  n=0
  API_ENDPOINT= 'http://www.tallerdesis.com:8000/api'

  valor=1;
  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute) { 
    
    this.obtener_personal_en().subscribe((data) => {
      //console.log(data);
      this.cirugia=data;
    }, error => {
      console.log(error);
    
    });; 
    
    this.obtener_personal().subscribe((data) => {
      console.log(this.personal_en);
      this.personal=data;
      for(var i=0;i<this.personal.length;i++){
        //if(this.personal_en[i]==this.personal[i]["id"]){
          for(var c=0;c<this.personal_en.length;c++){
            if(this.personal_en[c]==this.personal[i]["id"]){
              
              console.log(            this.personal_en[c]+"=="+this.personal[i]["id"]            );
              this.valor=0;
            }
            this.personal[i]["estado"]=this.valor+"";
          }
          this.valor=1;

          //this.valor[i]=0;
        //}
    }
console.log(this.personal);
    }, error => {
      console.log(error);
    
    });; 

    
    
    this.obtener_cirugia().subscribe((data) => {
      //console.log(data);
      this.cirugia=data;
    }, error => {
      console.log(error);
    
    });; 

    this.obtener_personal_cirugia().subscribe((data) => {
      //console.log(data);
      this.personal_cirugia=data;
    }, error => {
      console.log(error);
    
    });; 

    this.id =this.activatedRoute.snapshot.params['id'];
    if(this.id>0){
      this.estado=0;
      //console.log(this.id);
    }else{
      this.estado=1;
    }
  }

  
 
  ngOnInit() {
  }

  obtener_personal(){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/vistas/cirugias', {}, {headers: headers});
  }

  obtener_cirugia(){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/cirugia/getCirugias', {}, {headers: headers});
  }

  obtener_personal_cirugia(){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/personalCirugia/mostrar', {}, {headers: headers});
  }

  obtener_personal_en(){
    this.route="/personalCirugia/personalDeUnaCirugia"+this.id+"";
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + this.route, {}, {headers: headers});

  }
}
