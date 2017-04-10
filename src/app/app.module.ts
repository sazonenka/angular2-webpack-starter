import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  NgModule,
  ApplicationRef
} from '@angular/core';
import {
  removeNgStyles,
  createNewHosts,
  createInputTransfer
} from '@angularclass/hmr';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';

// Pages
import { CoursesComponent } from './pages/courses';
import { EditCourseComponent } from './pages/editcourse';
import { LoginComponent } from './pages/login';
import { NoContentComponent } from './pages/no-content';

// Common Components
import { BreadcrumbsComponent } from './core/components/header';
import { FooterComponent } from './core/components/footer';
import { HeaderComponent } from './core/components/header';
import { LoaderBlockComponent } from './core/components/loaderblock';
import { LogoComponent } from './core/components/header';
import { LogoffComponent } from './core/components/header';
import { ToolboxComponent } from './core/components/toolbox';

// Page Components
import { CourseItemComponent } from './pages/courses';
import { DateFieldComponent } from './pages/editcourse';
import { DurationFieldComponent } from './pages/editcourse';

// Directives
import { BorderColoredByDirective } from './core/directives';

// Pipes
import { DurationPipe } from './core/pipes';
import { FilterPipe } from './core/pipes';
import { OrderByPipe } from './core/pipes';

// Services
import { AuthService } from './core/services';
import { CoursesService } from './core/services';
import { LoaderBlockService } from './core/services';

import '../styles/styles.scss';
import '../styles/headings.css';

// Application wide providers
const APP_PROVIDERS = [
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,

    CoursesComponent,
    EditCourseComponent,
    LoginComponent,
    NoContentComponent,

    BreadcrumbsComponent,
    FooterComponent,
    HeaderComponent,
    LoaderBlockComponent,
    LogoComponent,
    LogoffComponent,
    ToolboxComponent,

    CourseItemComponent,
    DateFieldComponent,
    DurationFieldComponent,

    BorderColoredByDirective,

    DurationPipe,
    FilterPipe,
    OrderByPipe,
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,
    FilterPipe,
    AuthService,
    CoursesService,
    LoaderBlockService,
  ]
})
export class AppModule {

  constructor(public appRef: ApplicationRef) {
  }

  public hmrOnInit(store: any) {
    if (!store || !store.state) {
      return;
    }
    this.appRef.tick();
    delete store.state;
  }

  public hmrOnDestroy(store: any) {
    const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }

  public hmrAfterDestroy(store: any) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
