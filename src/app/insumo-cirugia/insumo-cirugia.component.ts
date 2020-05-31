import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { InsumoCirugiaService } from '../services/insumo-cirugia.service';

@Component({
  selector: 'app-insumo-cirugia',
  templateUrl: './insumo-cirugia.component.html',
  styleUrls: ['./insumo-cirugia.component.css']
})
export class InsumoCirugiaComponent implements OnInit {

  public insumo;
  public cirugia;
  public insumo_cirugia;
  id: any; 
  public estado;
  public mensaje="";
  public errores=""; 
  API_ENDPOINT= 'http://www.tallerdesis.com:8000/api'

  constructor(private httpClient: HttpClient,private activatedRoute: ActivatedRoute, private insumocirugiaService: InsumoCirugiaService) {
    this.id =this.activatedRoute.snapshot.params['id'];

    this.obtener_insumo().subscribe((data) => {
      console.log(data);
      this.insumo=data;

      this.obtener_insumo_cirugia().subscribe((data) => {
        console.log(data);
        this.insumo_cirugia=data;

        for(var i=0;i<this.insumo.length;i++){
          //console.log(this.insumo[i]['id']);
          this.insumo[i]['cantidad_re']=0;
          this.insumo[i]['estado']=0;

          for(var c=0;c<this.insumo_cirugia.length;c++){
            if(this.insumo[i]['id']==this.insumo_cirugia[c]['id_insumo']){
              console.log(this.insumo[i]['id']+"=="+this.insumo_cirugia[c]['id_insumo']);

              this.insumo[i]['cantidad_re']=this.insumo_cirugia[c]['cantidad'];
              this.insumo[i]['id_insumo_cirugia']=this.insumo_cirugia[c]['id'];
              this.insumo[i]['estado']=1;
            } 

          }

        }
        console.log(this.insumo);

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

  obtener_insumo(){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/insumo/mostrar', {}, {headers: headers});
  }

  obtener_cirugia(){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/cirugia/getCirugias', {}, {headers: headers});
  }

  obtener_insumo_cirugia(){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/insumoCirugia/insumoEnCirugia/'+this.activatedRoute.snapshot.params['id'], {}, {headers: headers});
  }

  modificar(id_insumo, cantidad_re,id_insumo_cirugia){
    var data={
      "id_insumo_cirugia":id_insumo_cirugia,
      'id_insumo':id_insumo, 
      'id_cirugia':this.activatedRoute.snapshot.params['id'],
      "cantidad": cantidad_re
    };

    this.insumocirugiaService.update(data).subscribe((data) => {
      this.mensaje=data["message"];
        this.errores=data["errores"];
      location.reload();
    }, error => {
        alert(error.error['message']);
    });
    
  }

  agregar(id_insumo, cantidad_re){
    var data={
      'id_insumo':id_insumo, 
      'id_cirugia':this.activatedRoute.snapshot.params['id'],
      "cantidad": cantidad_re
    };

    this.insumocirugiaService.agregar(data).subscribe((data) => {
      this.mensaje=data["message"];
        this.errores=data["errores"];
      location.reload();
    }, error => {
        alert(error.error['message']);
    });
    
  }

  eliminar(id_insumo_cirugia){
    this.insumocirugiaService.eliminar(id_insumo_cirugia).subscribe((data) => {
      this.mensaje=data["message"];
        this.errores=data["errores"];
      location.reload();
    }, error => {
        alert(error.error['message']);
    });
  }
  

}
