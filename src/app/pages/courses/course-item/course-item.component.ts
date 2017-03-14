import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ICourse } from '../../../core/entities'

@Component({
  selector: 'course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
})
export class CourseItemComponent {
  @Input() item: ICourse;
  @Output() courseDeleted = new EventEmitter();

  constructor() {
    console.log('Course Item constructor');
  }

  ngOnChanges() {
    console.log('Course Item ngOnChanges');
  }

  ngOnInit() {
    console.log('Course Item ngOnInit');
  }

  ngDoCheck() {
    console.log('Course Item ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('Course Item ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('Course Item ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('Course Item ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('Course Item ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('Course Item ngOnDestroy');
  }

  deleteCourse(id: string) {
    this.courseDeleted.emit(id);
  }
}
