import { Component, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolboxComponent {
  @Output()
  public coursesFiltered = new EventEmitter();

  public searchTerm = '';

  constructor(private router: Router) {}

  public findCourses() {
    this.coursesFiltered.emit(this.searchTerm);
  }

  public addCourse() {
    this.router.navigateByUrl('/courses/new');
  }
}
