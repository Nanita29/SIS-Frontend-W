import { Component, OnInit } from '@angular/core';
import { Personal } from '../interfaces/personal';
import { PersonalService } from '../services/personal.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-nuevopersonal',
  templateUrl: './nuevopersonal.component.html',
  styleUrls: ['./nuevopersonal.component.css']
})
export class NuevopersonalComponent implements OnInit {

  personal:Personal={
    'id':null, 
    'nombre':null,
	  'apellidoP':null,
	  'apellidoM':null,
    'direccion':null,
    'telefono':null,
    'id_rol':null,
    'estado':null,
  };
  personal_e:Personal={
    'id':null, 
    'nombre':null,
	  'apellidoP':null,
	  'apellidoM':null,
    'direccion':null,
    'telefono':null,
    'id_rol':null,
    'estado':null,
  };

  id: any;
  editing: boolean = false;
  public personals: Personal[]; 
  public datitos;
  public route;
  public valor;
  public estado;
  API_ENDPOINT= 'http://www.tallerdesis.com:8000/api'

  constructor(private personalService: PersonalService, private activatedRoute: ActivatedRoute,private httpClient: HttpClient) {
    
    this.obtener_rol().subscribe((data) => {
      console.log(data);
      this.valor=data;
      /* for(var i = 0;i<this.valor.length;i++) { 
        this.cargo = this.valor[i]['id_rol']
        if (this.cargo[i]=="1"){
          this.cargo=="enfermero"
        }
      }  */
    }, error => {
      console.log(error);
    
    });; 
    
    
    this.id =this.activatedRoute.snapshot.params['id'];
    if(this.id>0){
      this.estado=0;
      console.log(this.id);
      this.recdat().subscribe((data) => {
      console.log(data);
      //console.log(data[0]['name']);
      this.personal_e['nombre']=data[0]['nombre'];
      this.personal_e['apellidoP']=data[0]['apellidoP'];
      this.personal_e['apellidoM']=data[0]['apellidoM'];
      this.personal_e['direccion']=data[0]['direccion'];
      this.personal_e['telefono']=data[0]['telefono'];
      this.personal_e['id_rol']=data[0]['id_rol'];
      this.personal_e['estado']=data[0]['estado'];
      this.datitos=data;
    }, error => {
      console.log(error);
    
    });;
    }else{
      this.estado=1;
    }
    
   }

  ngOnInit() {
  } 

  registrar_personal(){
    this.personalService.save(this.personal).subscribe((data) => {
      alert (data['message']);
    }, error => {
        alert(error.error['message']);
    });
  }

  update(){
    this.personalService.update(this.id,this.personal_e).subscribe((data) => {
      alert (data['message']);
    }, error => {
        alert(error.error['message']);
    });
  }

  
  recdat(){
    this.route="/personal/detalle/"+this.id+"";
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + this.route, {}, {headers: headers});

  }

  obtener_rol(){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/rolPersonal/mostrar', {}, {headers: headers});

  }

}
