import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { BreadcrumbsService } from '../../../services';

@Component({
  selector: 'breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent implements OnInit {
  public courseTitle: Observable<string>;

  constructor(private breadcrumbsService: BreadcrumbsService) {}

  public ngOnInit() {
    this.courseTitle = this.breadcrumbsService.getCourseTitle();
  }
}
