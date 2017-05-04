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

  public selectedIdsObject: any = {};
  public selectedAuthors: Author[] = [];
  public touched: boolean = false;

  public writeValue(obj: any): void {
    if (obj != null) {
      obj.forEach((a: Author) => {
        this.selectedIdsObject[a.id] = true;
      });
      this.selectedAuthors = obj;
      this.propagateChange(obj);
    }
  }

  public registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.propagateTouch = fn;
  }

  public onChange(author: Author, checked: boolean) {
    this.touched = true;
    this.propagateTouch();

    if (checked) {
      this.selectedAuthors.push(author);
    } else {
      const indexToDelete = this.selectedAuthors.findIndex((a: Author) => a.id === author.id);
      this.selectedAuthors.splice(indexToDelete, 1);
    }
    this.propagateChange(this.selectedAuthors);
  }

  public validate(c: FormControl) {
    return this.selectedAuthors.length === 0 ?
        { invalidAuthors: true } :
        null;
  }

  private propagateChange = (_) => {/* tslint:disable *//* tslint:enable */};
  private propagateTouch = () => {/* tslint:disable *//* tslint:enable */};
}
