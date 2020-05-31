import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MaterialCirugiaService } from '../services/material-cirugia.service';

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
  public mensaje="";
  public errores="";
  API_ENDPOINT= 'http://www.tallerdesis.com:8000/api'

  constructor(private httpClient: HttpClient,private activatedRoute: ActivatedRoute, private materialcirugiaService: MaterialCirugiaService) {

    this.id =this.activatedRoute.snapshot.params['id'];

    this.obtener_material().subscribe((data) => {
      console.log(data);
      this.material=data;

      this.obtener_material_cirugia().subscribe((data) => {
        console.log(data);
        this.material_cirugia=data;

        for(var i=0;i<this.material.length;i++){
          //console.log(this.material[i]['id']);
          this.material[i]['cantidad_re']=0;
          this.material[i]['estado']=0;

          for(var c=0;c<this.material_cirugia.length;c++){
            if(this.material[i]['id']==this.material_cirugia[c]['id_material']){
              console.log(this.material[i]['id']+"=="+this.material_cirugia[c]['id_material']);

              this.material[i]['cantidad_re']=this.material_cirugia[c]['cantidad'];
              this.material[i]['id_material_cirugia']=this.material_cirugia[c]['id'];
              this.material[i]['estado']=1;
            }

          }

        }
        console.log(this.material);

      }, error => {
        console.log(error);
      
      });; 

    }, error => {
      console.log(error);
    
    });; 

    this.obtener_cirugia().subscribe((data) => {
      console.log(data);
      this.cirugia=data;
    }, error => {
      console.log(error);
    
    });; 

    

    
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
    return this.httpClient.post(this.API_ENDPOINT + '/materialCirugia/materialEnCirugia/'+this.activatedRoute.snapshot.params['id'], {}, {headers: headers});
  }

  modificar(id_material, cantidad_re,id_material_cirugia){
    var data={
      "id_material_cirugia":id_material_cirugia,
      'id_material':id_material, 
      'id_cirugia':this.activatedRoute.snapshot.params['id'],
      "cantidad": cantidad_re
    };

    this.materialcirugiaService.update(data).subscribe((data) => {
      this.mensaje=data["message"];
        this.errores=data["errores"];
      location.reload();
    }, error => {
        alert(error.error['message']);
    });
    
  }

  agregar(id_material, cantidad_re){
    var data={
      'id_material':id_material, 
      'id_cirugia':this.activatedRoute.snapshot.params['id'],
      "cantidad": cantidad_re
    };

    this.materialcirugiaService.agregar(data).subscribe((data) => {
      this.mensaje=data["message"];
        this.errores=data["errores"];
      location.reload();
    }, error => {
        alert(error.error['message']);
    });
    
  }

  eliminar(id_material_cirugia){
    this.materialcirugiaService.eliminar(id_material_cirugia).subscribe((data) => {
      this.mensaje=data["message"];
        this.errores=data["errores"];
      location.reload();
    }, error => {
        alert(error.error['message']);
    });
  }
  

}
 