import {
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
  NgZone
} from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { ICourse } from '../../core/entities';
import { CoursesService, LoaderBlockService } from '../../core/services';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesComponent implements OnInit, OnDestroy {
  public courseItems: Observable<ICourse[]>;

  private titleFragment: string;

  private startTime: Date;

  private onUnstableSubscription: Subscription;
  private onStableSubscription: Subscription;

  constructor(
      private coursesService: CoursesService,
      private loaderService: LoaderBlockService,
      private cd: ChangeDetectorRef,
      private ngZone: NgZone) {}

  public ngOnInit() {
    this.titleFragment = '';
    this.listCourses();

    this.onUnstableSubscription =
        this.ngZone.onUnstable.subscribe(this.onZoneUnstable.bind(this));
    this.onStableSubscription =
        this.ngZone.onStable.subscribe(this.onZoneStable.bind(this));
  }

  public setSearchTerm(searchTerm: string): void {
    this.titleFragment = searchTerm;
    this.listCourses();
  }

  public deleteCourse(id: string): void {
    if (window.confirm('Do you really want to delete the course?')) {
      this.loaderService.show();
      setTimeout(() => {
        this.coursesService.deleteCourse(id)
            .toPromise()
            .then(() => this.listCourses());

        this.loaderService.hide();
      }, 3000);
    }
  }

  public ngOnDestroy() {
    this.onUnstableSubscription.unsubscribe();
    this.onStableSubscription.unsubscribe();
  }

  private listCourses(): void {
    this.courseItems = this.coursesService.courses;
    this.coursesService.listCourses(this.titleFragment, 0, 20);
  }

  private filterOutdatedCourses(courses: ICourse[]): ICourse[] {
    return courses.filter((course) => {
      let now = new Date();
      let diffDays = (now.getTime() - course.date.getTime()) / (1000 * 60 * 60 * 24);
      return diffDays < 14;
    });
  }

  private onZoneUnstable(): void {
    this.startTime = new Date();
  }

  private onZoneStable(): void {
    let endTime = new Date();
    if (this.startTime) {
      let processTime = endTime.getMilliseconds() - this.startTime.getMilliseconds();
      console.log(`Process time (ms): ${processTime}`);
    }
  }
}
