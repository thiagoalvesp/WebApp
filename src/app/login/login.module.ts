import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertModule } from 'ngx-bootstrap';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, AlertModule.forRoot(), SharedModule
  ],
  exports : [LoginFormComponent , LoginComponent ],
  declarations: [LoginFormComponent , LoginComponent ],
  providers: [AngularFireAuth]
})
export class LoginModule { }
