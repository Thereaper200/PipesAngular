import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertir'
})
export class ConvertirPipe implements PipeTransform {

  transform(value: string, tipo: 'mayusculas' | 'minusculas'): string {
    if (tipo === 'mayusculas') {
      return value.toUpperCase();
    } else if (tipo === 'minusculas') {
      return value.toLowerCase();
    }
    return value;
  }
}
