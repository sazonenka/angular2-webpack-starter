import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, Validator } from '@angular/forms';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

import { Author } from '../../../core/entities';

@Component({
  selector: 'authors-field',
  templateUrl: './authors-field.component.html',
  styleUrls: ['./authors-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthorsFieldComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AuthorsFieldComponent),
      multi: true,
    },
  ],
})
export class AuthorsFieldComponent implements ControlValueAccessor, Validator {
  @Input()
  public authors: Author[];

  public selectedIds: number[] = [];
  public touched: boolean = false;

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

  public onChange(authorId: number, checked: boolean) {
    this.touched = true;
    this.propagateTouch();

    if (checked) {
      this.selectedIds.push(authorId);
    } else {
      const indexToDelete = this.selectedIds.findIndex((itemId: number) => itemId === authorId);
      this.selectedIds.splice(indexToDelete, 1);
    }
    this.propagateChange(this.selectedIds);
  }

  public validate(c: FormControl) {
    return this.touched && this.selectedIds.length == 0 ?
        { invalidAuthors: true } :
        null;
  }
}
