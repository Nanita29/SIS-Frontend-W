import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paciente'
})
export class PacientePipe implements PipeTransform {

  transform(pacientes: any[], filtro: any, columna: any="selected"): any[] {
    if (!filtro) return pacientes;
    return pacientes.filter(pacientes => (pacientes[columna]).includes(filtro));
  }


}
 