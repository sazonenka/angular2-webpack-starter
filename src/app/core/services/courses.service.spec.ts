import { TestBed } from '@angular/core/testing';
import { HttpModule, Response, ResponseOptions } from '@angular/http';

import { Observable } from 'rxjs';
import { StoreModule } from '@ngrx/store';

import { CoursesService, HttpService } from '.';

import { AppState, ICourse, Course, Author } from '../entities';
import { authorReducer, courseReducer } from '../reducers';

describe('CoursesService', () => {
  let coursesService: CoursesService;
  let httpService: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        StoreModule.provideStore({
          authors: authorReducer,
          courses: courseReducer,
        }),
      ],
      providers: [
        CoursesService,
        HttpService,
      ]
    });

    coursesService = TestBed.get(CoursesService);
    httpService = TestBed.get(HttpService);
  });

  it('should call "/courses" API and convert response to ICourse[]', () => {
    spyOn(httpService, 'get')
        .and.returnValue(Observable.of(new Response(new ResponseOptions({
          body: `{
            "courses": [
              {
                "id": 1234,
                "name": "Course 1",
                "description": "Description for Course 1",
                "isTopRated": false,
                "date": "2016-05-29T11:05:03+00:00",
                "authors": [
                  {
                    "id": 3343,
                    "firstName": "Margie",
                    "lastName": "Cote"
                  }
                ],
                "length": 283
              },
              {
                "id": 3001,
                "name": "Course 2",
                "description": "Description for Course 2",
                "isTopRated": true,
                "date": "2017-11-01T00:46:22+00:00",
                "authors": [
                  {
                    "id": 7987,
                    "firstName": "Anthony",
                    "lastName": "Mcguire"
                  },
                  {
                    "id": 80,
                    "firstName": "Knight",
                    "lastName": "York"
                  }
                ],
                "length": 155
              }
            ]
          }`,
        }))));

    coursesService.listCourses('', 0, 20);
    coursesService.courses.subscribe((courses: ICourse[]) => {
      expect(courses).toEqual([
        new Course(
          1234,
          'Course 1',
          'Description for Course 1',
          new Date('2016-05-29T11:05:03+00:00'),
          283,
          false,
          [
            {
              id: 3343,
              firstName: 'Margie',
              lastName: 'Cote',
            },
          ]),
        new Course(
          3001,
          'Course 2',
          'Description for Course 2',
          new Date('2017-11-01T00:46:22+00:00'),
          155,
          true,
          [
            {
              id: 7987,
              firstName: 'Anthony',
              lastName: 'Mcguire',
            },
            {
              id: 80,
              firstName: 'Knight',
              lastName: 'York',
            },
          ]),
      ]);
    });
  });

  it('should call "/courses/authors" API and convert response to Author[]', () => {
    spyOn(httpService, 'get')
        .and.returnValue(Observable.of(new Response(new ResponseOptions({
          body: `[
            {
              "id": 80,
              "firstName": "Knight",
              "lastName": "York"
            },
            {
              "id": 3343,
              "firstName": "Margie",
              "lastName": "Cote"
            },
            {
              "id": 7987,
              "firstName": "Anthony",
              "lastName": "Mcguire"
            },
            {
              "id": 3343,
              "firstName": "Margie",
              "lastName": "Cote"
            },
            {
              "id": 80,
              "firstName": "Knight",
              "lastName": "York"
            }
          ]`,
        }))));

    coursesService.listAuthors();
    coursesService.authors.subscribe((authors: Author[]) => {
      expect(authors).toEqual([
        new Author(3343, 'Margie', 'Cote'),
        new Author(7987, 'Anthony', 'Mcguire'),
        new Author(80, 'Knight', 'York'),
      ]);
    });
  });
});
