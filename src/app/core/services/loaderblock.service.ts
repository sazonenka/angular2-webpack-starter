import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoaderBlockService {
  public showSubject = new BehaviorSubject<boolean>(false);

  public show() {
    this.showSubject.next(true);
  }

  public hide() {
    this.showSubject.next(false);
  }
}
