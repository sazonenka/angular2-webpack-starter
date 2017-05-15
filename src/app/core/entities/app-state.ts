import { Author } from './author';
import { ICourse } from './course';

export interface AppState {
  courses: ICourse[];
  authors: Author[];
}
