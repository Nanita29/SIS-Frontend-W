import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Personal } from '../interfaces/personal';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personal-cirugia',
  templateUrl: './personal-cirugia.component.html',
  styleUrls: ['./personal-cirugia.component.css']
})
export class PersonalCirugiaComponent implements OnInit {

  public personal;
  public cirugia;
  public personal_cirugia;
  id: any;
  public estado;
  API_ENDPOINT= 'http://177.222.52.26:8000/api'

  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute) { 
    this.obtener_personal().subscribe((data) => {
      console.log(data);
      this.personal=data;
    }, error => {
      console.log(error);
    
    });; 

    this.obtener_cirugia().subscribe((data) => {
      console.log(data);
      this.cirugia=data;
    }, error => {
      console.log(error);
    
    });; 

    this.obtener_personal_cirugia().subscribe((data) => {
      console.log(data);
      this.personal_cirugia=data;
    }, error => {
      console.log(error);
    
    });; 

    this.id =this.activatedRoute.snapshot.params['id'];
    if(this.id>0){
      this.estado=0;
      console.log(this.id);
    }else{
      this.estado=1;
    }
  }

  
 
  ngOnInit() {
  }

  obtener_personal(){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/vistas/cirugias', {}, {headers: headers});
  }

  obtener_cirugia(){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/cirugia/getCirugias', {}, {headers: headers});
  }

  obtener_personal_cirugia(){
    const headers = new HttpHeaders( {'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});
    return this.httpClient.post(this.API_ENDPOINT + '/personalCirugia/mostrar', {}, {headers: headers});
  }

   /* myFunction() {
      // Declare variables
      var input, filter, table, tr, td, i, txtValue;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      table = document.getElementById("myTable");
      tr = table.getElementsByTagName("tr");

      // Loop through all table rows, and hide those who don't match the search query
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    } */
}
