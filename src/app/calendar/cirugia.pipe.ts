import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cirugia'
})
export class CirugiaPipe implements PipeTransform {

  transform(cirugias: any[], filtro: any, columna: any="selected"): any[] {
    if (!filtro) return cirugias;
    return cirugias.filter(cirugias => (cirugias[columna]).includes(filtro));
  }


}
