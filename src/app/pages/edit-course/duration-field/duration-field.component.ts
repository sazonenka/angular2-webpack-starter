import { Component, ChangeDetectionStrategy, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, Validator } from '@angular/forms';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

const DURATION_REGEXP = new RegExp('\\d+');

@Component({
  selector: 'duration-field',
  templateUrl: './duration-field.component.html',
  styleUrls: ['./duration-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DurationFieldComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DurationFieldComponent),
      multi: true,
    },
  ],
})
export class DurationFieldComponent implements ControlValueAccessor, Validator {
  public duration: number;

  private propagateChange = (_) => {};
  private propagateTouch = () => {};

  public writeValue(obj: number): void {
    if (obj != null) {
      this.duration = obj;
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
    this.propagateChange(DURATION_REGEXP.test(value) ? parseInt(value, 10) : null);
  }

  public onBlur() {
    this.propagateTouch();
  }

  public validate(c: FormControl) {
    return c.value != null ? null : { invalidDuration: true };
  }
}
