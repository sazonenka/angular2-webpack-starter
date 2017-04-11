import { Pipe, PipeTransform } from '@angular/core';

import { ICourse } from '../entities';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  public transform(array: ICourse[], field: string): ICourse[] {
    return [...array].sort(
      (c1, c2) => c1[field] > c2[field] ? 1 : c1[field] < c2[field] ? -1 : 0);
  }
}
