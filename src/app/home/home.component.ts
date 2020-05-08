import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  /* API_ENDPOINT= 'http://181.188.163.198/SIS-Backend/app/Http/Controllers/AuthController'
  users: User[];
  constructor(private ususuarioService: UsuariosService, private httpClient: HttpClient) {
      httpClient.get(this.API_ENDPOINT + '/getUser').subscribe((data:User[]) => {
        this.users=data;
    });
      } */

  ngOnInit() {
  }

}
