import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoffComponent } from './logoff.component';

import { AuthService } from '../../../services';

@NgModule({
  declarations: [LogoffComponent],
  imports: [
    CommonModule,
  ],
  exports: [LogoffComponent],
  providers: [
    AuthService,
  ],
})
export class LogoffModule {
}
