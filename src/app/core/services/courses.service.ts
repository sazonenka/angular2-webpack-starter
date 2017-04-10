import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { BackendCourse } from '../entities';

@Injectable()
export class CoursesService {
  private courseItemsSubject = new BehaviorSubject<BackendCourse[]>([]);

  public constructor() {
    this.courseItemsSubject.next([
      new BackendCourse(
        '1',
        'Video Course 1',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        this.addDays(new Date(), 3),
        88,
        true,
      ),
      new BackendCourse(
        '2',
        'Video Course 2',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        this.addDays(new Date(), -20),
        15,
        false,
      ),
      new BackendCourse(
        '3',
        'Video Course 3',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        this.addDays(new Date(), -3),
        135,
        false,
      ),
    ]);
  }

  public listCourses(): Observable<BackendCourse[]> {
    return this.courseItemsSubject.asObservable();
  }

  public getCourse(courseId: string): BackendCourse {
    return this.courseItemsSubject.getValue().find((item) => item.id === courseId);
  }

  public upsertCourse(course: BackendCourse): void {
    let newItems = this.courseItemsSubject.getValue().slice();

    newItems.push(course);
    this.courseItemsSubject.next(newItems);
  }

  public deleteCourse(courseId: string): void {
    let newItems = this.courseItemsSubject.getValue().slice();

    let index = newItems.findIndex((item) => item.id === courseId);
    if (index > -1) {
      newItems.splice(index, 1);
      this.courseItemsSubject.next(newItems);
    }
  }

  private addDays(date: Date, days: number): Date {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
}
