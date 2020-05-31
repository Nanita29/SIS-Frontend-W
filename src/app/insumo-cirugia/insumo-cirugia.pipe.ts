import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'insumoCirugia'
})
export class InsumoCirugiaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
