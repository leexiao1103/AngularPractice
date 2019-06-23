import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weirdstring'
})
export class WeirdstringPipe implements PipeTransform {

  transform(input: string): any {
    return input.split(' ').map(x => x.split('').map((v, i) => i % 2 != 0 ? v.toLowerCase() : v.toUpperCase()).join('')).join(' ');
  }
}
