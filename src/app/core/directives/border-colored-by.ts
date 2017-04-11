import {
  Directive,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[borderColoredBy]'
})
export class BorderColoredByDirective implements OnInit {
  @Input('borderColoredBy')
  public date: Date;

  constructor(private el: ElementRef) {}

  public ngOnInit() {
    let now = new Date();
    let diffDays = (now.getTime() - this.date.getTime()) / (1000 * 60 * 60 * 24);

    if (diffDays < 0) {
      // Upcoming
      this.el.nativeElement.style.borderColor = 'blue';
    } else if (diffDays < 14) {
      // Fresh
      this.el.nativeElement.style.borderColor = 'green';
    }
  }
}
