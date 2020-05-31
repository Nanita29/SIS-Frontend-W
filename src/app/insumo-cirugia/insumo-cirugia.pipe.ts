import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'insumoCirugia'
})
export class InsumoCirugiaPipe implements PipeTransform {

  transform(insumo: any[], filtro: any, columna: any="selected"): any[] {
    if (!filtro) return insumo;
    return insumo.filter(insumo => (insumo[columna]).includes(filtro));
  }

}
