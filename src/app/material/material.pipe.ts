import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'material'
})
export class MaterialPipe implements PipeTransform {

  transform(materiales: any[], filtro: any, columna: any="selected"): any[] {
    if (!filtro) return materiales;
    return materiales.filter(materiales => (materiales[columna]).includes(filtro));
  }


}
