import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneda'
})
export class MonedaPipe implements PipeTransform {

  transform(value: number, currency: string = 'USD'): string {
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: currency }).format(value);
  }
}
