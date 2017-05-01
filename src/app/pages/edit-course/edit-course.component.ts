import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ICourse } from '../../core/entities';

@Component({
  selector: 'edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditCourseComponent {
  public course: ICourse = <ICourse> {};

  public submit(form: NgForm) {
    console.log('EditCourseComponent.onSubmit()', form.value);
  }

  public cancel(form: NgForm) {
    form.reset();
  }
}
