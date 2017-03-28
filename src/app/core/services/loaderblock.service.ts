import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoaderBlockService {
  public showSubject = new BehaviorSubject<boolean>(false);

  show() {
    this.showSubject.next(true);
  }

  hide() {
    this.showSubject.next(false);
  }
}
