import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolboxModule } from '../../core/components/toolbox';
import { CoursesService } from '../../core/services';

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
  providers: [
    CoursesService,
  ],
})
export class CoursesModule {
}
