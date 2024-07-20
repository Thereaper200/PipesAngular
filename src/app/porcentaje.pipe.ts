import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'porcentaje'
})
export class PorcentajePipe implements PipeTransform {

  transform(value: number, decimals: number = 2): string {
    return (value * 100).toFixed(decimals) + '%';
  }
}
