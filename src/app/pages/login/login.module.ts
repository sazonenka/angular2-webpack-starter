import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

import { AuthService } from '../../core/services';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    FormsModule,
  ],
  providers: [
    AuthService,
  ],
})
export class LoginModule {
}
