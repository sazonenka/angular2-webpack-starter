import { Pipe, PipeTransform } from '@angular/core';

import { ICourse } from '../entities';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  public transform(array: ICourse[], value: string): ICourse[] {
    if (value) {
      return [...array].filter((course) => course.title.includes(value));
    }
    return array;
  }
}
