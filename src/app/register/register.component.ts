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
    'email': null,
    'password': null,
    'password_confirmation': null,
    'id_rol': '4',
  };

  user_e:User={
    //id: null,
    'name': null,
    'email': null,
    'password': null,
    'password_confirmation': null,
    'id_rol': '4',
  };

  id: any;
  editing: boolean = false;
  public users: User[];
  public datitos;
  public route;
  public estado;
  API_ENDPOINT= 'http://www.tallerdesis.com:8000/api'

  constructor(private usersService: UsuariosService, private activatedRoute: ActivatedRoute,private httpClient: HttpClient) { 


    this.id =this.activatedRoute.snapshot.params['id'];
    if(this.id>0){
      this.estado=0;
      console.log(this.id);
    this.recdat().subscribe((data) => {
      console.log(data);
      this.user_e['name']=data[0]['name'];
      this.user_e['email']=data[0]['email'];
      this.datitos=data;
    }, error => {
      console.log(error);
    
    });;
    }else{
      this.estado=1;
    }
    

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
      alert (data['message']);
    }, error => {
        alert(error.error['message']);
    });
  } 
  update(){
    this.usersService.update(this.id,this.user_e).subscribe((data) => {
      alert (data['message']);
    }, error => {
        alert(error.error['message']);
    });
  }

  
  recdat(){
    this.route="/user/"+this.id+"";
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + this.route, {}, {headers: headers});

  }

} 
