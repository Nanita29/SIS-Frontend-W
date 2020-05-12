import { Component, OnInit } from '@angular/core';
import {Insumo} from '../interfaces/insumo';
import {InsumoService} from '../services/insumo.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-nuevoinsumo',
  templateUrl: './nuevoinsumo.component.html',
  styleUrls: ['./nuevoinsumo.component.css']
})
export class NuevoinsumoComponent implements OnInit {

  insumo: Insumo={
    'id':null,
    'nombre':null,
    'descripcion':null,
    'cantidad':null,
  };

  insumo_e: Insumo={
    'id':null,
    'nombre':null,
    'descripcion':null,
    'cantidad':null,
  };

  id: any;
  editing: boolean = false;
  public insumos: Insumo[]; 
  public datitos;
  public route;
  public valor;
  public estado;
  API_ENDPOINT= 'http://177.222.52.26:8000/api'

  constructor(private insumoService: InsumoService, private activatedRoute: ActivatedRoute,private httpClient: HttpClient) { 
    this.id =this.activatedRoute.snapshot.params['id'];
    if(this.id>0){
      this.estado=0;
      console.log(this.id);
      this.recdat().subscribe((data) => {
      console.log(data);
      //console.log(data[0]['name']);
      this.insumo_e['nombre']=data[0]['nombre'];
      this.insumo_e['descripcion']=data[0]['descripcion'];
      this.insumo_e['cantidad']=data[0]['cantidad'];
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

  registrar_insumo(){
    this.insumoService.save(this.insumo).subscribe((data) => {
      alert (data['message']);
    }, error => {
        alert(error.error['message']);
    });
  }

  update(){
    this.insumoService.update(this.id,this.insumo_e).subscribe((data) => {
      alert (data['message']);
    }, error => {
        alert(error.error['message']);
    });
  }

  
  recdat(){
    this.route="/insumo/detalle/"+this.id+"";
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + this.route, {}, {headers: headers});

  }

}
