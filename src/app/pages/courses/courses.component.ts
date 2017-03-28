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
import { ICourse } from '../../core/entities';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesComponent implements OnInit, OnDestroy {
  public courseItems: ICourse[] = [];

  private startTime: Date;

  private onUnstableSubscription: Subscription;
  private onStableSubscription: Subscription;

  constructor(
      private cd: ChangeDetectorRef,
      private coursesService: CoursesService, 
      private loaderService: LoaderBlockService,
      private ngZone: NgZone) {
    this.onUnstableSubscription =
        this.ngZone.onUnstable.subscribe(this.onZoneUnstable.bind(this));
    this.onStableSubscription =
        this.ngZone.onStable.subscribe(this.onZoneStable.bind(this));
  }

  public ngOnInit() {
    this.courseItems = this.coursesService.listCourses();
  }

  public deleteCourse($event) {
    if (window.confirm('Do you really want to delete the course?')) {
      this.loaderService.show();
      setTimeout(() => {
        this.coursesService.deleteCourse($event.id);
        this.courseItems = this.coursesService.listCourses();
        this.cd.markForCheck();
        this.loaderService.hide();
      }, 3000);
    }
  }

  private onZoneUnstable(): void {
    this.startTime = new Date();
  }

  private onZoneStable(): void {
    if (this.startTime) {
      console.log(`Process time (ms): ${ new Date().getMilliseconds() - this.startTime.getMilliseconds() }`);
    }
  }

  public ngOnDestroy() {
    this.onUnstableSubscription.unsubscribe();
    this.onStableSubscription.unsubscribe();
  }
}
