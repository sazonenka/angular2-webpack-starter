import { Injectable } from '@angular/core';

import { ICourse } from '../entities/course';
import { Course } from '../entities/course';

@Injectable()
export class CoursesService {
  private courseItems: { [id: string]: ICourse; } = {};

  constructor() {
    this.courseItems['1'] = new Course(
      '1',
      'Video Course 1',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      new Date(),
      88,
    );
    this.courseItems['2'] = new Course(
      '2',
      'Video Course 2',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      new Date(),
      15,
    );
    this.courseItems['3'] = new Course(
      '3',
      'Video Course 3',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      new Date(),
      135,
    );
  }

  listCourses(): ICourse[] {
    let courses: ICourse[] = [];
    for (let courseId in this.courseItems) {
      courses.push(this.courseItems[courseId]);
    }
    return courses;
  }

  getCourse(courseId: string): ICourse {
    return this.courseItems[courseId];
  }

  upsertCourse(course: ICourse): void {
    this.courseItems[course.id] = course;
  }

  deleteCourse(courseId: string): void {
    delete this.courseItems[courseId];
  }
}
