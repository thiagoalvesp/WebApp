import { Injectable, EventEmitter  } from '@angular/core';
import { Alert } from '../models/alert';

@Injectable()
export class MsgService {


  alertEmitter = new EventEmitter<Alert>();
  listaDeErros = [
    { erroCode : 'auth/app-deleted' , msgPtBr: 'Aplicativo deletado.' },
    { erroCode : 'auth/invalid-email' , msgPtBr: 'Email inválido.' },
    { erroCode : 'auth/user-disabled' , msgPtBr: 'Usuário desabilitado.' },
    { erroCode : 'auth/wrong-password' , msgPtBr: 'Senha incorreta.' },
    { erroCode : 'auth/email-already-in-use' , msgPtBr: 'Email já está sendo utilizado.' },
    { erroCode : 'auth/operation-not-allowed' , msgPtBr: 'Operação não permitida.' },
    { erroCode : 'auth/weak-password' , msgPtBr: 'Senha não é forte suficiente.' },
    { erroCode : 'auth/user-not-found' , msgPtBr: 'Não existe usuário cadastrado com esse email.' }
  ];

  constructor() {}

  showAlert (type: string, msg: string) {
      this.alertEmitter.emit(new Alert(type, msg));
  }

  showErrorAlert (erroCode: string) {
    let msg: string[] = this.listaDeErros
    .filter(el => el.erroCode === erroCode)
    .map( el => el.msgPtBr);

    if (msg[0] === '') {
      msg[0] = 'Ocorreu um erro inesperado, por favor entre contato com administrador do sistema.';
    }

    this.alertEmitter.emit(new Alert('danger', msg[0]));
  }

}


