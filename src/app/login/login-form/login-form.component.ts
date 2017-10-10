import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { Alert } from '../../shared/models/alert';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  formulario: FormGroup;
  alerts: Alert[] = [];

  constructor(
    private authSvc: AuthService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
        email: [null, Validators.required],
        senha: [null, Validators.required]
    });
  }

  onSubmit() {

    if (!this.formulario.valid) {
      return;
    }

    this.authSvc.login(this.formulario.controls.email.value, this.formulario.controls.senha.value);
    // o retorno das mensagens do firebase e no catch da promise não consegui fazer o emit funcionar
    // pois ele não pertence a scopo do catch
    // this.alerts.push(new Alert('danger', 'Não possivel realizar o acesso! Verifique o email e senha e tente novamente!'));

  }


  verificaValidTouched(campo: string) {
    return (
      !this.formulario.get(campo).valid &&
      (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)
    );
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

}
