import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class BreadcrumbsService {
  private courseTitleSubject = new BehaviorSubject<string>(undefined);

  public getCourseTitle(): Observable<string> {
    return this.courseTitleSubject.asObservable();
  }

  public setCourseTitle(title: string): void {
    this.courseTitleSubject.next(title);
  }
}
