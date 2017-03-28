import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbsModule } from './breadcrumbs';
import { LogoModule } from './logo';
import { LogoffModule } from './logoff';

import { HeaderComponent } from './header.component';

import { AuthService } from '../../services';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    BreadcrumbsModule,
    LogoModule,
    LogoffModule,
  ],
  exports: [HeaderComponent],
  providers: [
    AuthService,
  ],
})
export class HeaderModule {
}
