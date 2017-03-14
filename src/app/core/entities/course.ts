export interface ICourse {
  id: string;
  title: string;
  description: string;
  createDate: Date;
  durationMin: number;
}

export class Course implements ICourse {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public createDate: Date,
    public durationMin: number
  ) { }
}
