import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {Route, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PacientesComponent } from './pacientes/pacientes.component';
import { CalendarComponent } from './calendar/calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CirugiasComponent } from './cirugias/cirugias.component';
import { SalasComponent } from './salas/salas.component';
import { NuevasalaComponent } from './nuevasala/nuevasala.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { PersonalComponent } from './personal/personal.component';
import { NuevopersonalComponent } from './nuevopersonal/nuevopersonal.component';
import { PersonalCirugiaComponent } from './personal-cirugia/personal-cirugia.component';
import { NuevoinsumoComponent } from './nuevoinsumo/nuevoinsumo.component';
import { InsumoComponent } from './insumo/insumo.component';
import { MaterialComponent } from './material/material.component';
import { NuevomaterialComponent } from './nuevomaterial/nuevomaterial.component';
import { InsumoCirugiaComponent } from './insumo-cirugia/insumo-cirugia.component';
import { MaterialCirugiaComponent } from './material-cirugia/material-cirugia.component';
import { InsumoPipe } from './insumo/insumo.pipe';
import { MaterialPipe } from './material/material.pipe';
import { PersonalPipe } from './personal/personal.pipe';
import { SalaPipe } from './salas/sala.pipe';
import { CirugiaPipe } from './calendar/cirugia.pipe';
import { PacientePipe } from './pacientes/paciente.pipe';

import { PersonalCirugiaPipe } from './personal-cirugia/personal-cirugia.pipe';

const routes: Route[] = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'register/:id', component: RegisterComponent},
  {path: 'pacientes', component: PacientesComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'cirugias', component: CirugiasComponent},
  {path: 'cirugias/:id', component: CirugiasComponent},
  {path: 'salas', component: SalasComponent},
  {path: 'nuevasala', component: NuevasalaComponent},
  {path: 'nuevasala/:id', component: NuevasalaComponent},
  {path: 'personal', component: PersonalComponent},
  {path: 'nuevopersonal/:id', component: NuevopersonalComponent},
  {path: 'nuevopersonal', component: NuevopersonalComponent},
  {path: 'insumos', component: InsumoComponent},
  {path: 'nuevoinsumo/:id', component: NuevoinsumoComponent},
  {path: 'nuevoinsumo', component: NuevoinsumoComponent},
  {path: 'materiales', component: MaterialComponent},
  {path: 'nuevomaterial/:id', component: NuevomaterialComponent},
  {path: 'nuevomaterial', component: NuevomaterialComponent},
  {path: 'personal_cirugia/:id', component: PersonalCirugiaComponent},
  {path: 'insumo_cirugia/:id', component: InsumoCirugiaComponent},
  {path: 'material_cirugia/:id', component: MaterialCirugiaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PacientesComponent,
    CalendarComponent,
    CirugiasComponent,
    SalasComponent,
    NuevasalaComponent,
    PersonalComponent,
    NuevopersonalComponent,
    PersonalCirugiaComponent,
    InsumoComponent,
    NuevoinsumoComponent,
    MaterialComponent,
    NuevomaterialComponent,
    InsumoCirugiaComponent,
    MaterialCirugiaComponent,
    InsumoPipe,
    MaterialPipe,
    PersonalPipe,
    SalaPipe,
    CirugiaPipe,
    PacientePipe,
    PersonalCirugiaPipe
  ],
  
  imports: [
    BrowserModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    //NgbModule.forRoot(),
    //NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})


export class AppModule { }
