import { Course } from './../../core/entities/course';
import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Observable, BehaviorSubject } from 'rxjs';

import { EditCourseComponent } from './edit-course.component';
import { AuthorsFieldComponent } from './authors-field/authors-field.component';
import { DateFieldComponent } from './date-field/date-field.component';
import { DurationFieldComponent } from './duration-field/duration-field.component';

import { DurationPipe } from '../../core/pipes';
import { CoursesService, BreadcrumbsService } from '../../core/services';

describe('EditCourseComponent', () => {
  let fixture: ComponentFixture<EditCourseComponent>;
  let instance: EditCourseComponent;

  let coursesService: any;
  let breadcrumbsService: any;
  let router: any;
  let route: MockActivatedRoute;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [
            EditCourseComponent,
            AuthorsFieldComponent,
            DateFieldComponent,
            DurationFieldComponent,
            DurationPipe,
          ],
          imports: [
            FormsModule,
          ],
          providers: [
            {
              provide: CoursesService,
              useValue: jasmine.createSpyObj('MockCoursesService',
                  ['getCourse', 'listAuthors', 'createCourse', 'updateCourse']),
            },
            {
              provide: BreadcrumbsService,
              useValue: jasmine.createSpyObj('MockBreadcrumbsService',
                  ['setCourseTitle']),
            },
            {
              provide: Router,
              useValue: jasmine.createSpyObj('MockRouter',
                  ['navigateByUrl']),
            },
            {
              provide: ActivatedRoute,
              useClass: MockActivatedRoute,
            },
          ],
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCourseComponent);
    instance = fixture.componentInstance;

    coursesService = TestBed.get(CoursesService);
    breadcrumbsService = TestBed.get(BreadcrumbsService);
    router = TestBed.get(Router);
    route = TestBed.get(ActivatedRoute);
  });

  it('should load just authors for a new course', fakeAsync(() => {
    route.setParams({
      id: 'new',
    });
    fixture.detectChanges();
    tick();

    expect(coursesService.getCourse).not.toHaveBeenCalled();
    expect(coursesService.listAuthors).toHaveBeenCalled();

    expect(instance.isNew).toBe(true);
    expect(instance.course).toEqual({});
  }));

  it('should load course details and authors for an existing course', fakeAsync(() => {
    const course = new Course(
        1234,
        'Course 1',
        'Description for Course 1',
        new Date('2016-05-29T11:05:03+00:00'),
        283,
        false,
        [
          {
            id: 3343,
            firstName: 'Margie',
            lastName: 'Cote',
          },
        ]);

    route.setParams({
      id: '1234',
    });
    coursesService.getCourse.and.returnValue(Observable.of(course));
    fixture.detectChanges();
    tick();

    expect(coursesService.getCourse).toHaveBeenCalledWith('1234');
    expect(breadcrumbsService.setCourseTitle).toHaveBeenCalledWith('Course 1');
    expect(coursesService.listAuthors).toHaveBeenCalled();

    expect(instance.isNew).toBe(false);
    expect(instance.course).toEqual(course);
  }));

  it('should create a new course if submitted', fakeAsync(() => {
    const course = new Course(
        undefined,
        'Course 1',
        'Description for Course 1',
        new Date('2016-05-29T11:05:03+00:00'),
        283,
        false,
        [
          {
            id: 3343,
            firstName: 'Margie',
            lastName: 'Cote',
          },
        ]);

    route.setParams({
      id: 'new',
    });
    fixture.detectChanges();
    tick();

    coursesService.createCourse.and.returnValue(Observable.of());
    instance.course = course;
    instance.submit();
    tick();

    expect(coursesService.createCourse).toHaveBeenCalledWith(course);
    expect(coursesService.updateCourse).not.toHaveBeenCalled();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/courses');
  }));

  it('should update an existing course if submitted', fakeAsync(() => {
    const course = new Course(
        1234,
        'Course 1',
        'Description for Course 1',
        new Date('2016-05-29T11:05:03+00:00'),
        283,
        false,
        [
          {
            id: 3343,
            firstName: 'Margie',
            lastName: 'Cote',
          },
        ]);

    route.setParams({
      id: '1234',
    });
    coursesService.getCourse.and.returnValue(Observable.of(course));
    fixture.detectChanges();
    tick();

    coursesService.updateCourse.and.returnValue(Observable.of());
    instance.course.title = 'Updated Course 1';
    instance.submit();
    tick();

    expect(coursesService.updateCourse).toHaveBeenCalledWith(course);
    expect(coursesService.createCourse).not.toHaveBeenCalled();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/courses');
  }));

  it('should navigate to Courses page if cancelled', fakeAsync(() => {
    route.setParams({
      id: 'new',
    });
    fixture.detectChanges();
    tick();

    instance.cancel();

    expect(router.navigateByUrl).toHaveBeenCalledWith('/courses');
  }));
});

export class MockActivatedRoute {
  public params: Observable<Params>;

  private paramsSubject = new BehaviorSubject<Params>({});

  public constructor() {
    this.params = this.paramsSubject.asObservable();
  }

  public setParams(params: Params) {
    this.paramsSubject.next(params);
  }
}
