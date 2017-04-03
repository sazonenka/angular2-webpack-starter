import { Pipe, PipeTransform } from '@angular/core';

import { ICourse } from '../entities';

@Pipe({
  name: 'orderCoursesBy'
})
export class OrderCoursesByPipe implements PipeTransform {
  public transform(array: Array<ICourse>, field: string): Array<ICourse> {
    return [...array].sort(
      (c1, c2) => c1[field] > c2[field] ? 1 : c1[field] < c2[field] ? -1 : 0);
  }
}
