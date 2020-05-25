import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../app/interfaces/user';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from './services/usuarios.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/* export class AppComponent {
  title = 'Sistma de Cirugías';
} */
export class AppComponent implements OnInit {

  title = 'Sistema de ';

  rol: any;
  nombre: any;
  id: any;
  public estado;
  valor={
    'id':null,
    'id_rol':null,
    'name':null,
  };
    
  //public valor;
    API_ENDPOINT= 'http://www.tallerdesis.com:8000/api'
    user: User[];
    constructor(private usersService: UsuariosService, private activatedRoute: ActivatedRoute,private httpClient: HttpClient) {

      /* this.rol =this.activatedRoute.snapshot.params['id_rol'];
      this.nombre =this.activatedRoute.snapshot.params['name[0]'];
      this.id =this.activatedRoute.snapshot.params['id[0]'];
      if(this.id>0){
        this.estado=0;
      }else{
        this.estado=1;
      }
 */
      

      this.funciona().subscribe((data) => {        
        this.valor['name']=(data['name']);
        this.valor['id']=(data['id']);
        this.valor['id_rol']=(data['id_rol']);
      }, error => {
        console.log(error);
      
      });; 
  
    }
  
    ngOnInit() {
    } 
    funciona(){
      const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
      return this.httpClient.post(this.API_ENDPOINT + '/auth/user', {}, {headers: headers});
  
    }
  }


