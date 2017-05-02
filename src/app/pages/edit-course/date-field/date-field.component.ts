import { Component, ChangeDetectionStrategy, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, Validator } from '@angular/forms';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

import { ICourse } from '../../../core/entities';

const DATE_REGEXP = new RegExp('\\d{2}\\/\\d{2}\\/\\d{4}');

@Component({
  selector: 'date-field',
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateFieldComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DateFieldComponent),
      multi: true,
    },
  ],
})
export class DateFieldComponent implements ControlValueAccessor, Validator {
  private propagateChange = (_) => {};
  private propagateTouch = () => {};

  public writeValue(obj: any): void {
  }

  public registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.propagateTouch = fn;
  }

  public onChange(event) {
    const value = event.target.value;
    if (!DATE_REGEXP.test(value)) {
      this.propagateChange(null);
      return;
    }

    const dateParts = value.split('/');
    this.propagateChange(new Date(dateParts[2], dateParts[1] - 1, dateParts[0]));
  }

  public onBlur() {
    this.propagateTouch();
  }

  public validate(c: FormControl) {
    return c.value != null ? null : { invalidDate: true };
  }
}
