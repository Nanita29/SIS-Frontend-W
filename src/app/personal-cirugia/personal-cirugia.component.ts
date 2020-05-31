import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Personal } from '../interfaces/personal';
import { ActivatedRoute } from '@angular/router';
import { PersonalCirugiaService } from '../services/personal-cirugia.service';
import {Personal_cirugia} from '../interfaces/personal_cirugia'

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
  id= this.activatedRoute.snapshot.params['id'];
  public estado;
  datos=[1,2,4];

public x;
public y;

public mensaje="";
  public errores="";

  /* per_cir:Personal_cirugia={
    'id':null,
    'id_personal':this.personal['id'],
    'id_cirugia':this.id,
  }; */

  n=0
  API_ENDPOINT= 'http://www.tallerdesis.com:8000/api'

  valor=1;
  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute, private personalcirugiaService: PersonalCirugiaService) { 
    
    

    this.obtener_personal_en(this.id).subscribe((data) => {
      this.personal_en=data;
      this.obtener_personal().subscribe((data) => {
        this.personal=data;
  
      

      for(var i=0;i<this.personal.length;i++){
        //if(this.personal_en[i]==this.personal[i]["id"]){
          this.personal[i]['agregado']=1;
          this.personal[i]['id_mat']=-100;
          for(var c=0;c<this.personal_en.length;c++){

            if(this.personal_en[c]['id_personal']==this.personal[i]['id']){
              this.personal[i]['id_mat']=this.personal_en[c]["id"];
              this.valor=0;
            }
            this.personal[i]['agregado']=this.valor+"";
          }
          this.valor=1;

          //this.valor[i]=0;
        //}
    }
console.log(this.personal);
      }, error => {
        console.log(error);
      
      });; 
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

    
    if(this.id>0){
      this.estado=0;
    }else{
      this.estado=1;
    }


    
    /**/
  }

  
 
  ngOnInit() {
    
  }

  obtener_personal(){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/vistas/personal', {}, {headers: headers});
  }

  obtener_cirugia(){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/cirugia/getCirugias', {}, {headers: headers});
  }

  obtener_personal_cirugia(){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/personalCirugia/mostrar', {}, {headers: headers});
  }

  obtener_personal_en(id){
    this.route="/personalCirugia/personalDeUnaCirugia/"+id;
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + this.route, {}, {headers: headers});

  }

  agregar(id_personal){
    var datosss={
      'id_personal':id_personal, 
      'id_cirugia':this.activatedRoute.snapshot.params['id']
    };
    this.personalcirugiaService.save(datosss).subscribe((data) => {
      this.mensaje=data["message"];
        this.errores=data["errores"];
      location.reload();
    }, error => {
        alert(error.error['message']);
    });
     
  }
  eliminar(id){
    this.personalcirugiaService.eliminar(id).subscribe((data) => {
      this.mensaje=data["message"];
        this.errores=data["errores"];
      location.reload();
    }, error => {
        alert(error.error['message']);
    });
  }
}
