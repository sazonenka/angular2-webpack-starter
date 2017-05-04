import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

import { CoursesService, BreadcrumbsService } from '../../core/services';

import { ICourse, Author } from '../../core/entities';

@Component({
  selector: 'edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditCourseComponent implements OnInit, OnDestroy {
  public isNew: boolean = true;
  public course: ICourse = <ICourse> {};
  public authors: Author[] = [];

  private routeParamsSubscription: Subscription;

  constructor(
    private coursesService: CoursesService,
    private breadcrumbsService: BreadcrumbsService,
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router) {}

  public ngOnInit() {
    this.routeParamsSubscription = this.route.params.subscribe((params: Params) => {
      let courseId = params['id'];
      if (courseId !== 'new') {
        this.isNew = false;
        this.coursesService.getCourse(courseId)
            .toPromise()
            .then((course: ICourse) => {
              this.course = course;
              this.titleChanged(course.title);
              this.cd.markForCheck();
            });
      }
    });
    this.coursesService.listAuthors()
        .toPromise()
        .then((authors: Author[]) => {
          this.authors = authors;
          this.cd.markForCheck();
        });
  }

  public titleChanged(newTitle: string): void {
    this.breadcrumbsService.setCourseTitle(newTitle);
  }

  public submit() {
    console.log('submit', this.course);
    if (this.isNew) {
      this.coursesService.createCourse(this.course)
          .toPromise()
          .then(() => this.router.navigateByUrl('/courses'));
    } else {
      this.coursesService.updateCourse(this.course)
          .toPromise()
          .then(() => this.router.navigateByUrl('/courses'));
    }
  }

  public cancel() {
    this.router.navigateByUrl('/courses');
  }

  public ngOnDestroy() {
    this.breadcrumbsService.setCourseTitle(undefined);
    this.routeParamsSubscription.unsubscribe();
  }
}
