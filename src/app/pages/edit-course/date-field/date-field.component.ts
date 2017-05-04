import { Component, ChangeDetectionStrategy, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, Validator } from '@angular/forms';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

const DATE_REGEXP = new RegExp('^\\d{1,2}\\/\\d{1,2}\\/\\d{4}$');

@Component({
  selector: 'date-field',
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.scss'],
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
  public dateString: string;

  public writeValue(obj: Date): void {
    if (obj != null) {
      this.dateString = `${obj.getDate()}/${obj.getMonth() + 1}/${obj.getFullYear()}`;

      this.propagateChange(obj);
    }
  }

  public registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.propagateTouch = fn;
  }

  public onChange(value) {
    if (!DATE_REGEXP.test(value)) {
      this.propagateChange(null);
    } else {
      const dateParts = value.split('/');
      this.propagateChange(new Date(dateParts[2], dateParts[1] - 1, dateParts[0]));
    }
  }

  public onBlur() {
    this.propagateTouch();
  }

  public validate(c: FormControl) {
    return c.value != null ? null : { invalidDate: true };
  }

  private propagateChange = (_) => {/* tslint:disable *//* tslint:enable */};
  private propagateTouch = () => {/* tslint:disable *//* tslint:enable */};
}
