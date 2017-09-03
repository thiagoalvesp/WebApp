import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AngularFireAuth } from 'angularfire2/auth';

@NgModule({
  imports: [
    CommonModule, FormsModule, MaterialModule
  ],
  exports : [LoginFormComponent , LoginComponent ],
  declarations: [LoginFormComponent , LoginComponent ],
  providers: [AngularFireAuth]
})
export class LoginModule { }
