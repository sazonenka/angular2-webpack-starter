import { Author } from './author';

export interface ICourse {
  id: number;
  title: string;
  description: string;
  date: Date;
  durationMin: number;
  topRated: boolean;
  authors: Author[];
}

export class Course implements ICourse {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public date: Date,
    public durationMin: number,
    public topRated: boolean,
    public authors: Author[]
  ) { }
}
