import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personalCirugia'
})
export class PersonalCirugiaPipe implements PipeTransform {

  transform(personal: any[], filtro: any, columna: any="selected"): any[] {
    if (!filtro) return personal;
    return personal.filter(personal => (personal[columna]).includes(filtro));
  }

}
