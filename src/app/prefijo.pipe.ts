import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefijo'
})
export class PrefijoPipe implements PipeTransform {

  transform(value: string, prefix: string): string {
    return `${prefix} ${value}`;
  }
}
