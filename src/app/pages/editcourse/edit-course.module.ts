import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EditCourseComponent } from './edit-course.component';
import { DateFieldComponent } from './date-field/date-field.component';
import { DurationFieldComponent } from './duration-field/duration-field.component';

@NgModule({
  declarations: [
    EditCourseComponent,
    DateFieldComponent,
    DurationFieldComponent,
  ],
  imports: [
    FormsModule,
  ],
})
export class EditCourseModule {
}
