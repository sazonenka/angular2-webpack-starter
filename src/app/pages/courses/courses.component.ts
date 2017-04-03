import {
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
  NgZone
} from '@angular/core';

import { Subscription } from 'rxjs';

import { CoursesService, LoaderBlockService } from '../../core/services';
import { FilterPipe } from '../../core/pipes';
import { ICourse } from '../../core/entities';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesComponent implements OnInit, OnDestroy {
  private titleFragment: string;

  public courseItems: ICourse[] = [];

  private startTime: Date;

  private onUnstableSubscription: Subscription;
  private onStableSubscription: Subscription;

  constructor(
      private cd: ChangeDetectorRef,
      private coursesService: CoursesService,
      private loaderService: LoaderBlockService,
      private filterPipe: FilterPipe,
      private ngZone: NgZone) {}

  public ngOnInit() {
    this.titleFragment = '';
    this.loadCourseItems();

    this.onUnstableSubscription =
        this.ngZone.onUnstable.subscribe(this.onZoneUnstable.bind(this));
    this.onStableSubscription =
        this.ngZone.onStable.subscribe(this.onZoneStable.bind(this));
  }

  private loadCourseItems(): void {
    this.courseItems = this.filterPipe.transform(
      this.coursesService.listCourses(), this.titleFragment);
  }

  public filterCourses(searchTerm: string) {
    this.titleFragment = searchTerm;
    this.loadCourseItems();
  }

  public courseItemsEmpty(): boolean {
    return !this.courseItems || this.courseItems.length == 0;
  }

  public deleteCourse($event) {
    if (window.confirm('Do you really want to delete the course?')) {
      this.loaderService.show();
      setTimeout(() => {
        this.coursesService.deleteCourse($event.id);
        this.loadCourseItems();

        this.cd.markForCheck();
        this.loaderService.hide();
      }, 3000);
    }
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

  public ngOnDestroy() {
    this.onUnstableSubscription.unsubscribe();
    this.onStableSubscription.unsubscribe();
  }
}
