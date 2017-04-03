import { Pipe, PipeTransform } from '@angular/core';

import { ICourse } from '../entities';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  public transform(array: Array<ICourse>, value: string): Array<ICourse> {
    if (value) {
      return [...array].filter(course => course.title.includes(value));
    }
    return array;
  }
}
