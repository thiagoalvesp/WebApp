import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent }  from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import {  AngularFireAuth} from 'angularfire2/auth';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  exports : [LoginFormComponent , LoginComponent ],
  declarations: [LoginFormComponent , LoginComponent ],
  providers: [AngularFireAuth]
})
export class LoginModule { }

///https://braziljs.org/blog/simples-aplicacao-real-time-com-angular-4-e-firebase-parte-5/
//Agora vamos colocar os campos no template html do login-form e escrever o código para ele.