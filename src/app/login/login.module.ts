import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [LoginFormComponent , LoginComponent ],
  providers: []
})
export class LoginModule { }
