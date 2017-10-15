import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MsgService } from '../../services/msg.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { CadastrarSeFormComponent } from '../cadastrar-se-form/cadastrar-se-form.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  bsModalRef: BsModalRef;
  formulario: FormGroup;

  constructor(
    private authSvc: AuthService,
    private formBuilder: FormBuilder,
    private msgService: MsgService,
    private modalService: BsModalService
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

  recuperarSenha() {
    if (!this.formulario.controls.email.valid) {
      this.msgService.showAlert('warning', 'Por favor preencha o email.');
      return;
    }
    this.authSvc.recuperarSenha(this.formulario.controls.email.value);
  }

  CadastrarSe() {
    this.bsModalRef = this.modalService.show(CadastrarSeFormComponent,
      {backdrop: false, ignoreBackdropClick: true});
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
