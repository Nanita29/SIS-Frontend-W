import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'materialCirugia'
})
export class MaterialCirugiaPipe implements PipeTransform {

  transform(material: any[], filtro: any, columna: any="selected"): any[] {
    if (!filtro) return material;
    return material.filter(material => (material[columna]).includes(filtro));
  }

}
 