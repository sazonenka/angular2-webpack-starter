import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ICourse } from '../../../core/entities'

@Component({
  selector: 'course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
})
export class CourseItemComponent {
  @Input() item: ICourse;
  @Input() index: number;
  @Output() courseDeleted = new EventEmitter();

  constructor() {
    console.log('Course Item constructor');
  }

  ngOnInit() {
    console.log('Course Item ngOnInit');
  }

  deleteCourse() {
    this.courseDeleted.emit({
      id: this.item.id,
      index: this.index,
    });
  }
}
