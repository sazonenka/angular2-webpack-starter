import {
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
  NgZone
} from '@angular/core';

import { Subscription } from 'rxjs';

import { ICourse, ListCoursesResponse } from '../../core/entities';
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
  public courseItems: ICourse[] = [];
  public total: number = 0;

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

  public courseItemsEmpty(): boolean {
    return this.courseItems.length === 0;
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
    this.listCoursesSubscription.unsubscribe();
    this.onUnstableSubscription.unsubscribe();
    this.onStableSubscription.unsubscribe();
  }

  private listCourses(): void {
    if (this.listCoursesSubscription) {
      this.listCoursesSubscription.unsubscribe();
    }

    this.listCoursesSubscription =
        this.coursesService.listCourses(this.titleFragment, 0, 20)
            .map(this.filterOutdatedCourses, this)
            .subscribe((resp: ListCoursesResponse) => {
              this.courseItems = resp.courses;
              this.total = resp.total;

              this.cd.markForCheck();
            });
  }

  private filterOutdatedCourses(resp: ListCoursesResponse): ListCoursesResponse {
    return new ListCoursesResponse(
      resp.courses.filter((course) => {
        let now = new Date();
        let diffDays = (now.getTime() - course.date.getTime()) / (1000 * 60 * 60 * 24);
        return diffDays < 14;
      }),
      resp.total
    );
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
