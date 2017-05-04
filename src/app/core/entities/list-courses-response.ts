import { ICourse } from './course';

export class ListCoursesResponse {
  constructor(
    public courses: ICourse[],
    public total: number
  ) { }
}
