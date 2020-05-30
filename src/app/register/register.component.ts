import { Component, OnInit } from '@angular/core';
import {User} from '../interfaces/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import{UsuariosService} from '../services/usuarios.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User={
    //id: null,
    'name': null,
    'apaterno': null,
    'amaterno': null,
    'carnet': null,
    'celular': null,
    'telefono': null,
    'direccion': null,
    'fecha_nac': null,
    'email': null,
    'emergencia': null,
    'tel_emergencia': null,
    'password': null,
    'password_confirmation': null,
    'id_rol': null,
  };

  user_e:User={
    //id: null,
    'name': null,
    'apaterno': null,
    'amaterno': null,
    'carnet': null,
    'celular': null,
    'telefono': null,
    'direccion': null,
    'fecha_nac': null,
    'email': null,
    'emergencia': null,
    'tel_emergencia': null,
    'password': null,
    'password_confirmation': null,
    'id_rol': null,
  };

  id: any;
  editing: boolean = false;
  public users: User[];
  public datitos;
  public route;
  public estado;
  public roles;
  valor={
    'id':null,
    'id_rol':null,
    'name':null,
  };

  public mensaje="";
  public errores="";
  API_ENDPOINT= 'http://www.tallerdesis.com:8000/api'

  constructor(private usersService: UsuariosService, private activatedRoute: ActivatedRoute,private httpClient: HttpClient) { 


    this.id =this.activatedRoute.snapshot.params['id'];

    this.obtener_roles().subscribe((data) => {
      this.roles=data;
    }, error => {
      console.log(error);
    
    });; 

    if(this.id>0){
      this.estado=0;
      console.log(this.id);
    this.recdat().subscribe((data) => {
      console.log(data);
      this.user_e['name']=data[0][0]['name'];
      this.user_e['apaterno']=data[0][0]['apaterno'];
      this.user_e['amaterno']=data[0][0]['amaterno'];
      this.user_e['carnet']=data[0][0]['carnet'];
      this.user_e['celular']=data[0][0]['celular'];
      this.user_e['telefono']=data[0][0]['telefono'];
      this.user_e['direccion']=data[0][0]['direccion'];
      this.user_e['fecha_nac']=data[0][0]['fecha_nac'];
      this.user_e['email']=data[0][0]['email'];
      this.user_e['emergencia']=data[0][0]['emergencia'];
      this.user_e['tel_emergencia']=data[0][0]['tel_emergencia'];
      this.user_e['id_rol']=data[0][0]['id_rol'];
      this.datitos=data[0];
    }, error => {
      console.log(error);
    
    });;
    }else{
      this.estado=1;
    }

    this.obtener_usuario().subscribe((data) => {        
      this.valor['name']=(data['name']);
      this.valor['id']=(data['id']);
      this.valor['id_rol']=(data['id_rol']);
    }, error => {
      console.log(error);
    
    });; 
    

    /* this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id);
    if(this.id){
      this.editing = true;
      this.usersService.get().subscribe((data:User[]) => {
        this.users = data;
        console.log(this.user);
        //this.user = this.users.find( (m) => {return m.id == this.id});
    
      }, error => {
          alert(error.error['message']);
      });
    }

    else{
      this.editing=false;
    } */
     /* this.user = this.usersService.save(
      {
        email: [''],
        contrasena: null,
        rol: null,
        ci:null,
        nombre:null,
        nacimiento: null,
        direccion: null,
        celular: null,
        telefono: null,
      }) ;*/
     
  }

  ngOnInit() { 
  }

  registrarUser(){
    this.usersService.save(this.user).subscribe((data) => {
        
        this.mensaje=data["message"];
        this.errores=data["errores"];
      
    }, error => {
      alert(error.error['message']);
  });
  } 
  update(){
    this.usersService.update(this.id,this.user_e).subscribe((data) => {
      this.mensaje=data["message"];
        this.errores=data["errores"];
    }, error => {
        alert(error.error['message']);
    });
  }
 
  
  recdat(){
    this.route="/user/"+this.id+"";
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + this.route, {}, {headers: headers});

  }

  obtener_usuario(){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/auth/user', {}, {headers: headers});

  }

  obtener_roles(){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/rol/mostrar', {}, {headers: headers});

  }

} 
