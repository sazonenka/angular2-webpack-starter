import { Injectable } from '@angular/core';
import { Response, URLSearchParams, Headers } from '@angular/http';

import { Action, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { HttpService } from './http.service';

import { AppState } from '../entities';
import { ICourse, Course, ListCoursesResponse } from '../entities';
import { Author } from '../entities';

@Injectable()
export class CoursesService {
  public courses: Observable<ICourse[]>;
  public authors: Observable<Author[]>;

  public constructor(
    private httpService: HttpService,
    private store: Store<AppState>) {
      this.courses = store.select((st) => st.courses);
      this.authors = store.select((st) => st.authors);
    }

  public listCourses(searchTerm: string, start: number, count: number) {
    let params = new URLSearchParams();
    params.set('query', searchTerm);
    params.set('start', start.toString());
    params.set('count', count.toString());

    return this.httpService.get('/courses', {search: params})
        .map((resp: Response) => {
          const result = resp.json();
          return result.courses.map((course) => new Course(
              course.id,
              course.name,
              course.description,
              new Date(course.date),
              course.length,
              course.isTopRated,
              course.authors));
        })
        .map((payload: ICourse[]) => {
          return { type: 'LOAD_COURSES', payload };
        })
        .subscribe((action: Action) => {
          this.store.dispatch(action);
        });
  }

  public listAuthors() {
    return this.httpService.get('/courses/authors')
        .map((resp: Response) => {
          const result = resp.json();

          // Remove duplicates.
          let authorsObj = result.reduce((obj, author) => {
            obj[author.id] = author;
            return obj;
          }, {});
          // Sort for stability.
          let authorIds = Object.keys(authorsObj).sort();

          return authorIds.map((authorId) => {
            let author = authorsObj[authorId];
            return new Author(author.id, author.firstName, author.lastName);
          });
        })
        .map((payload: Author[]) => {
          return { type: 'LOAD_AUTHORS', payload };
        })
        .subscribe((action: Action) => {
          this.store.dispatch(action);
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
            result.authors,
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
      authors: course.authors
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
      authors: course.authors
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
