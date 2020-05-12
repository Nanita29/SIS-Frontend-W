import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'insumo'
})
export class InsumoPipe implements PipeTransform {

  transform(insumos: any[], filtro: any, columna: any="selected"): any[] {
    if (!filtro) return insumos;
    return insumos.filter(insumos => (insumos[columna]).includes(filtro));
  }

}



