import { Component, OnInit } from '@angular/core';
import {User} from '../interfaces/user';
import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User={
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
  constructor(private usersService: UsuariosService, private router: Router) { 
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
     }) */;
    
 }

  ngOnInit() {
  }

  ingresarCuenta(){
    this.usersService.ingresar(this.user).subscribe((data) => {
      alert ('Inicio con éxito');
      /* console.log(data['access_token']);
      console.log(data); */
      this.router.navigate(['/pacientes']);
      localStorage.setItem("token",data['access_token']);

    }, (errorServicio) => {
      console.log(errorServicio);
      this.router.navigate(['']);
      alert('Ocurrió un error al iniciar sesión');
    });
  }
 
}
