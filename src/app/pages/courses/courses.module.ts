import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolboxModule } from '../../core/components/toolbox';

import { CoursesComponent } from './courses.component';
import { CourseItemComponent } from './course-item/course-item.component';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseItemComponent,
  ],
  imports: [
    CommonModule,
    ToolboxModule,
  ],
})
export class CoursesModule {
}
