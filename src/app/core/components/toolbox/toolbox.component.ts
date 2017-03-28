import { Component } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolboxComponent {
  public searchTerm = '';

  public findCourses() {
    console.log(this.searchTerm);
  }

  public addCourse() {
    console.log('Add Course button clicked!');
  }
}
