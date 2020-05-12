import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sala'
})
export class SalaPipe implements PipeTransform {

  transform(salas: any[], filtro: any, columna: any="selected"): any[] {
    if (!filtro) return salas;
    return salas.filter(salas => (salas[columna]).includes(filtro));
  }


}
 