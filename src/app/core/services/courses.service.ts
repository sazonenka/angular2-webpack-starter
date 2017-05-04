import { Injectable } from '@angular/core';
import { Response, URLSearchParams, Headers } from '@angular/http';

import { Observable } from 'rxjs';

import { HttpService } from './http.service';
import { ICourse, Course, ListCoursesResponse } from '../entities';
import { Author } from '../entities';

@Injectable()
export class CoursesService {
  public constructor(private httpService: HttpService) {}

  public listCourses(searchTerm: string, start: number, count: number):
      Observable<ListCoursesResponse> {
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
              course.isTopRated,
              course.authors.map((author) => author.id))),
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

  public getCourse(courseId: string): Observable<ICourse> {
    return this.httpService.get(`/courses/${courseId}`)
        .map((resp: Response) => {
          const result = resp.json();
          return new Course(
            result.id,
            result.name,
            result.description,
            new Date(result.date),
            result.length,
            result.isTopRated,
            result.authors.map((author) => author.id)
          );
        });
  }

  public createCourse(course: ICourse): Observable<any> {
    let requestBody = {
      name: course.title,
      description: course.description,
      isTopRated: course.topRated,
      date: course.date.toUTCString(),
      length: course.durationMin,
      authors: course.authors.map((author) => ({id: author}))
    };

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.httpService.post('/courses', requestBody, {headers})
        .map((resp: Response) => resp.json());
  }

  public updateCourse(course: ICourse): Observable<any> {
    let requestBody = {
      id: course.id,
      name: course.title,
      description: course.description,
      isTopRated: course.topRated,
      date: course.date.toUTCString(),
      length: course.durationMin,
      authors: course.authors.map((author) => ({id: author}))
    };

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.httpService.put(`/courses/${course.id}`, requestBody, {headers})
        .map((resp: Response) => resp.json());
  }

  public deleteCourse(courseId: string): Observable<any> {
    return this.httpService.delete(`/courses/${courseId}`)
        .map((resp: Response) => resp.json());
  }
}
