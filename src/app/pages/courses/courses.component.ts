import {
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
  NgZone
} from '@angular/core';

import { Subscription } from 'rxjs';

import {
  ICourse,
  Course,
  BackendCourse,
} from '../../core/entities';
import { FilterPipe } from '../../core/pipes';
import {
  CoursesService,
  LoaderBlockService,
} from '../../core/services';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesComponent implements OnInit, OnDestroy {
  private courseItems: ICourse[];
  private titleFragment: string;

  private startTime: Date;

  private listCoursesSubscription: Subscription;
  private onUnstableSubscription: Subscription;
  private onStableSubscription: Subscription;

  constructor(
      private coursesService: CoursesService,
      private loaderService: LoaderBlockService,
      private filterPipe: FilterPipe,
      private cd: ChangeDetectorRef,
      private ngZone: NgZone) {}

  public ngOnInit() {
    this.listCoursesSubscription =
        this.coursesService.listCourses()
            .map(this.convertFromBackendCourses, this)
            .map(this.filterOutdatedCourses, this)
            .subscribe((items) => this.courseItems = items);
    this.titleFragment = '';

    this.onUnstableSubscription =
        this.ngZone.onUnstable.subscribe(this.onZoneUnstable.bind(this));
    this.onStableSubscription =
        this.ngZone.onStable.subscribe(this.onZoneStable.bind(this));
  }

  public getCourseItems(): ICourse[] {
    return this.filterPipe.transform(this.courseItems, this.titleFragment);
  }

  public setSearchTerm(searchTerm: string): void {
    this.titleFragment = searchTerm;
  }

  public courseItemsEmpty(): boolean {
    return this.getCourseItems().length === 0;
  }

  public deleteCourse(id: string): void {
    if (window.confirm('Do you really want to delete the course?')) {
      this.loaderService.show();
      setTimeout(() => {
        this.coursesService.deleteCourse(id);

        this.cd.markForCheck();
        this.loaderService.hide();
      }, 3000);
    }
  }

  public ngOnDestroy() {
    this.listCoursesSubscription.unsubscribe();
    this.onUnstableSubscription.unsubscribe();
    this.onStableSubscription.unsubscribe();
  }

  private convertFromBackendCourses(items: BackendCourse[]): ICourse[] {
    return items.map((item) => new Course(
      item.id,
      item.name,
      item.content,
      item.createDate,
      item.duration,
      item.featured
    ));
  }

  private filterOutdatedCourses(items: ICourse[]): ICourse[] {
    return items.filter((item) => {
      let now = new Date();
      let diffDays = (now.getTime() - item.date.getTime()) / (1000 * 60 * 60 * 24);
      return diffDays < 14;
    });
  }

  private onZoneUnstable(): void {
    this.startTime = new Date();
  }

  private onZoneStable(): void {
    let endTime = new Date();
    if (this.startTime) {
      console.log(`Process time (ms): ${ endTime.getMilliseconds() - this.startTime.getMilliseconds() }`);
    }
  }
}
