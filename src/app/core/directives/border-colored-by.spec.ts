import { Component } from '@angular/core';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BorderColoredByDirective } from './border-colored-by';

describe('BorderColoredByDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let instance: TestComponent;

  @Component({
    template: '<div [borderColoredBy]="date">Content</div>'
  })
  class TestComponent {
    public date: Date;
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BorderColoredByDirective,
        TestComponent,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    instance = fixture.componentInstance;
  });

  it('should set blue border for upcoming dates', () => {
    const now = new Date();
    const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);

    instance.date = tomorrow;
    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css('div'));
    expect(element.nativeElement.style.borderColor).toBe('blue');
  });

  it('should set green border for fresh dates', () => {
    const now = new Date();
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

    instance.date = weekAgo;
    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css('div'));
    expect(element.nativeElement.style.borderColor).toBe('green');
  });

  it('should not change border color for old dates', () => {
    const now = new Date();
    const threeWeeksAgo = new Date(now.getTime() - 21 * 24 * 60 * 60 * 1000);

    instance.date = threeWeeksAgo;
    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css('div'));
    expect(element.nativeElement.style.borderColor).toBe('');
  });
});
