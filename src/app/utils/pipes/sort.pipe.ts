import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
})
export class SortPipe implements PipeTransform {
  transform(array: string[], order?: string): string[] {
    return array.sort((a: string, b: string): number => {
      for (let i = 0; i < Math.min(a.length, b.length); i++) {
        const c1 = a.charCodeAt(i);
        const c2 = b.charCodeAt(i);
        if (c1 !== c2) {
          return order === 'desc' ? c2 - c1 : c1 - c2;
        }
      }
      return order === 'desc' ? b.length - a.length : a.length - b.length;
    });
  }
}
