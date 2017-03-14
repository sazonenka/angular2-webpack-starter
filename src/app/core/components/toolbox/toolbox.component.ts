import { Component } from '@angular/core';

@Component({
  selector: 'toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss'],
})
export class ToolboxComponent {
  searchTerm = '';

  findCourses() {
    console.log(this.searchTerm);
  }

  addCourse() {
    console.log('Add Course button clicked!');
  }
}
