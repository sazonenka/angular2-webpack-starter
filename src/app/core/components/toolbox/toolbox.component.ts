import { Component } from '@angular/core';

@Component({
  selector: 'toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss'],
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
