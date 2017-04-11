import { Routes } from '@angular/router';
import { CoursesComponent } from './pages/courses';
import { EditCourseComponent } from './pages/edit-course';
import { LoginComponent } from './pages/login';
import { NoContentComponent } from './pages/no-content';

export const ROUTES: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'edit-course', component: EditCourseComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NoContentComponent },
];
