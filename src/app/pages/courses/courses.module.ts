import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolboxModule } from '../../core/components/toolbox';

import { CoursesComponent } from './courses.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { BorderColoredByDirective } from '../../core/directives';

import { CoursesService } from '../../core/services';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseItemComponent,
    BorderColoredByDirective,
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