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
  public titleFragment: string;
  public courseItems: ICourse[] = [];

  private startTime: Date;

  private listCoursesSubscription: Subscription;
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
    this.listCoursesSubscription =
      this.coursesService.listCourses()
          .map(items => items.filter(item => {
            let now = new Date();
            let diffDays = (now.getTime() - item.createDate.getTime()) / (1000 * 60 * 60 * 24);
            return diffDays < 14;
          }))
          .subscribe(items => this.courseItems = items);

    this.onUnstableSubscription =
        this.ngZone.onUnstable.subscribe(this.onZoneUnstable.bind(this));
    this.onStableSubscription =
        this.ngZone.onStable.subscribe(this.onZoneStable.bind(this));
  }

  public filterCourses(searchTerm: string): void {
    this.titleFragment = searchTerm;
  }

  public courseItemsEmpty(): boolean {
    return !this.courseItems || this.courseItems.length === 0;
  }

  public deleteCourse($event): void {
    if (window.confirm('Do you really want to delete the course?')) {
      this.loaderService.show();
      setTimeout(() => {
        this.coursesService.deleteCourse($event.id);

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
