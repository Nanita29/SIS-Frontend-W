import { Component, OnInit } from '@angular/core';
import {Material} from '../interfaces/material';
import {MaterialService} from '../services/material.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-nuevomaterial',
  templateUrl: './nuevomaterial.component.html',
  styleUrls: ['./nuevomaterial.component.css']
})
export class NuevomaterialComponent implements OnInit {

  material: Material={
    'id':null,
    'nombre':null,
    'descripcion':null,
    'id_estado':null,
    'cantidad':null,
    'estadoe':null,
  };

  material_e: Material={
    'id':null,
    'nombre':null,
    'descripcion':null,
    'id_estado':null,
    'cantidad':null,
    'estadoe':null,
  };

  id: any;
  editing: boolean = false;
  public materiales: Material[]; 
  public datitos;
  public route;
  public valor;
  public estado;
  API_ENDPOINT= 'http://www.tallerdesis.com:8000/api'

  constructor(private materialService: MaterialService, private activatedRoute: ActivatedRoute,private httpClient: HttpClient) {

    this.obtener_estado().subscribe((data) => {
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
      this.material_e['nombre']=data[0]['nombre'];
      this.material_e['descripcion']=data[0]['descripcion'];
      this.material_e['id_estado']=data[0]['id_estado'];
      this.material_e['cantidad']=data[0]['cantidad'];
      this.material_e['estadoe']=data[0]['estadoe'];
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

  registrar_material(){
    this.materialService.save(this.material).subscribe((data) => {
      alert (data['message']);
    }, error => {
        alert(error.error['message']);
    });
  }

  update(){
    this.materialService.update(this.id,this.material_e).subscribe((data) => {
      alert (data['message']);
    }, error => {
        alert(error.error['message']);
    });
  }

  
  recdat(){
    this.route="/material/detalle/"+this.id+"";
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + this.route, {}, {headers: headers});

  }

  obtener_estado(){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/rolPersonal/mostrar', {}, {headers: headers});

  }

}
