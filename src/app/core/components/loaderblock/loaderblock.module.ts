import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderBlockComponent } from './loaderblock.component';

import { LoaderBlockService } from '../../services';

@NgModule({
  declarations: [LoaderBlockComponent],
  imports: [
    CommonModule,
  ],
  exports: [LoaderBlockComponent],
  providers: [
    LoaderBlockService,
  ],
})
export class LoaderBlockModule {
}
