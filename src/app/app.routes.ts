import { Routes } from '@angular/router';
import { CoursesComponent } from './pages/courses';
import { EditCourseComponent } from './pages/edit-course';
import { LoginComponent } from './pages/login';
import { NoContentComponent } from './pages/no-content';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },

  { path: 'courses', component: CoursesComponent, pathMatch: 'full' },
  { path: 'courses/:id', component: EditCourseComponent, pathMatch: 'full' },

  { path: 'login', component: LoginComponent, pathMatch: 'full' },

  { path: '**', component: NoContentComponent },
];
