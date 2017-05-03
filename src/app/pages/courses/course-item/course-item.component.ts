import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { ICourse } from '../../../core/entities';

@Component({
  selector: 'course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseItemComponent {
  @Input()
  public item: ICourse;

  @Input()
  public index: number;

  @Output()
  public courseDeleted = new EventEmitter();

  constructor(private router: Router) {}

  public editCourse() {
    this.router.navigateByUrl(`/courses/${this.item.id}`);
  }

  public deleteCourse() {
    this.courseDeleted.emit(this.item.id);
  }
}
