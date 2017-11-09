import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MsgService } from '../../services/msg.service';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-cadastrar-se-form',
  templateUrl: './cadastrar-se-form.component.html',
  styleUrls: ['./cadastrar-se-form.component.css']
})
export class CadastrarSeFormComponent implements OnInit {

  formulario: FormGroup;
  fechaModal: boolean;

  constructor(
    private authSvc: AuthService,
    private formBuilder: FormBuilder,
    private msgService: MsgService,
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      email: [null, Validators.required],
      senha: [null, Validators.required],
      confirmacao: [null, Validators.required],
    });

    this.authSvc.fechaModalCadastroDeUsuario.subscribe(
      fecha => {
          if (fecha) {
            this.bsModalRef.hide();
          }
       });
  }

  onSubmit() {
    if (!this.formulario.valid) {
      return;
    }
    if (this.formulario.controls.senha.value !== this.formulario.controls.confirmacao.value) {
      this.msgService.showAlert('warning', 'Por favor preencha a nova senha e a confirmação com o mesmo valor.');
      return;
    }
    this.authSvc.criarUsuario(this.formulario.controls.email.value, this.formulario.controls.email.value);
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

