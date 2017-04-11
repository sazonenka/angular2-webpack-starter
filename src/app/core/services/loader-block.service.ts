import { Injectable } from '@angular/core';

import { ReplaySubject } from 'rxjs';

@Injectable()
export class LoaderBlockService {
  public showSubject = new ReplaySubject<boolean>(1);

  public show() {
    this.showSubject.next(true);
  }

  public hide() {
    this.showSubject.next(false);
  }
}
