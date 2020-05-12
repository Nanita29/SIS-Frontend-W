import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personal'
})
export class PersonalPipe implements PipeTransform {

  transform(personals: any[], filtro: any, columna: any="selected"): any[] {
    if (!filtro) return personals;
    return personals.filter(personals => (personals[columna]).includes(filtro));
  }

}
