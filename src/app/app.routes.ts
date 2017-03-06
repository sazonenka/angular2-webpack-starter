import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login';
import { CoursesComponent } from './pages/courses';
import { NoContentComponent } from './pages/no-content';

export const ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'courses', component: CoursesComponent },
  { path: '**',    component: NoContentComponent },
];
