import { Component } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Input } from '@angular/core';

import { ICourse } from '../../../core/entities';

@Component({
  selector: 'duration-field',
  templateUrl: './duration-field.component.html',
  styleUrls: ['./duration-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DurationFieldComponent {
  @Input()
  public course: ICourse;
}
