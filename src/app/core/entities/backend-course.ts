export class BackendCourse {
  constructor(
    public id: string,
    public name: string,
    public content: string,
    public createDate: Date,
    public duration: number,
    public featured: boolean
  ) { }
}
