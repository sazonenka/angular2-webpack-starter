export interface ICourse {
  id: string;
  title: string;
  description: string;
  date: Date;
  durationMin: number;
  topRated: boolean;
}

export class Course implements ICourse {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public date: Date,
    public durationMin: number,
    public topRated: boolean
  ) { }
}
