import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirstLetter',
  standalone: true,
})
export class CapitalizeFirstLetterPipe implements PipeTransform {
  transform(str: string): string {
    return `${str.charAt(0).toUpperCase()}${str.substring(1).toLowerCase()}`;
  }
}
