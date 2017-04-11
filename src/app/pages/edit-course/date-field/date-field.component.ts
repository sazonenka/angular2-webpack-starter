import {
  Component,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

import { ICourse } from '../../../core/entities';

@Component({
  selector: 'date-field',
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateFieldComponent {
  @Input()
  public course: ICourse;
}
