import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CoursesService } from '../../core/services';

import { ICourse, Author } from '../../core/entities';

@Component({
  selector: 'edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditCourseComponent implements OnInit {
  public course: ICourse = <ICourse> {};
  public authors: Author[] = [];

  constructor(
    private coursesService: CoursesService,
    private cd: ChangeDetectorRef) {}

  public ngOnInit() {
    this.coursesService.listAuthors()
        .toPromise()
        .then((authors: Author[]) => {
          this.authors = authors;
          this.cd.markForCheck();
        });
  }

  public submit(form: NgForm) {
    console.log('EditCourseComponent.onSubmit()', form.value);
  }

  public cancel(form: NgForm) {
    form.reset();
  }
}
