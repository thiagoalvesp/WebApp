import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AlterarSenhaFormComponent } from './alterar-senha-form/alterar-senha-form.component';
import { CadastrarSeFormComponent } from './cadastrar-se-form/cadastrar-se-form.component';


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [LoginFormComponent , LoginComponent, AlterarSenhaFormComponent, CadastrarSeFormComponent ],
  entryComponents: [AlterarSenhaFormComponent, CadastrarSeFormComponent],
  exports: [AlterarSenhaFormComponent],
  providers: []
})
export class LoginModule { }
