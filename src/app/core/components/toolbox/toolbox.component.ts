import {
  Component,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
} from '@angular/core';

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

  public findCourses() {
    this.coursesFiltered.emit(this.searchTerm);
  }

  public addCourse() {
    console.log('Add Course button clicked!');
  }
}
