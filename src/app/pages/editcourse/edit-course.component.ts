import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ICourse } from '../../core/entities';

@Component({
  selector: 'edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditCourseComponent {
  public course: ICourse = <ICourse> {};

  public onSubmit() {
    console.log('EditCourseComponent.onSubmit()');
  }

  public onCancel() {
    console.log('EditCourseComponent.onCancel()');
  }
}
