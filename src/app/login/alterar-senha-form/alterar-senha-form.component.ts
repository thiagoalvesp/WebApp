import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MsgService } from '../../services/msg.service';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-alterar-senha-form',
  templateUrl: './alterar-senha-form.component.html',
  styleUrls: ['./alterar-senha-form.component.css']
})
export class AlterarSenhaFormComponent implements OnInit {

  formulario: FormGroup;
  constructor(
    private authSvc: AuthService,
    private formBuilder: FormBuilder,
    private msgService: MsgService,
    public bsModalRef: BsModalRef
    ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      senha: [null, Validators.required],
      confirmacao: [null, Validators.required]
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

      this.authSvc.alterarSenha(this.formulario.controls.senha.value);
      this.bsModalRef.hide();
  }

}
