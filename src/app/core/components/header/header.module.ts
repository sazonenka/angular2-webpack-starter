import { NgModule } from '@angular/core';
import { BreadcrumbsModule } from './breadcrumbs';
import { LogoModule } from './logo';
import { LogoffModule } from './logoff';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    BreadcrumbsModule,
    LogoModule,
    LogoffModule,
  ],
  exports: [HeaderComponent]
})
export class HeaderModule {
  constructor() {
  }
}
