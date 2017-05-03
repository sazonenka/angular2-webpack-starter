import { Injectable } from '@angular/core';
import { Response, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs';

import { HttpService } from './http.service';
import { Course, ListCoursesResponse } from '../entities';
import { Author } from '../entities';

@Injectable()
export class CoursesService {
  public constructor(private httpService: HttpService) {}

  public listCourses(searchTerm: string, start: number, count: number): Observable<ListCoursesResponse> {
    let params = new URLSearchParams();
    params.set('query', searchTerm);
    params.set('start', start.toString());
    params.set('count', count.toString());

    return this.httpService.get('/courses', {search: params})
        .map((resp: Response) => {
          const result = resp.json();
          return new ListCoursesResponse(
            result.courses.map((course) => new Course(
              course.id,
              course.name,
              course.description,
              new Date(course.date),
              course.length,
              course.isTopRated)),
            result.total
          );
        });
  }

  public listAuthors(): Observable<Author[]> {
    return this.httpService.get('/courses/authors')
        .map((resp: Response) => {
          const result = resp.json();
          return result.map((author) => new Author(
              author.id,
              author.firstName,
              author.lastName
          ));
        });
  }

  public deleteCourse(courseId: string): Observable<any> {
    return this.httpService.delete(`/courses/${courseId}`)
        .map((resp: Response) => resp.json());
  }
}
