import { Injectable, EventEmitter  } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { MsgService } from './msg.service';


@Injectable()
export class AuthService {

  authState: any = null;
  mostrarMenuEmitter = new EventEmitter<boolean>();
  fechaModalCadastroDeUsuario = new EventEmitter<boolean>();

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private msgService: MsgService
  ) {}


  login(email: string, senha: string): void {

    const msgService = this.msgService;

    this.afAuth.auth.signInWithEmailAndPassword(email, senha)
      .then( user => {
        this.authState = user;
        this.mostrarMenuEmitter.emit(true);
        this.router.navigate(['/home']);
      })
      .catch(function (onReject: any) {
        msgService.showErrorAlert(onReject.code);
      });


  }
  logout() {
    this.mostrarMenuEmitter.emit(false);
    this.afAuth.auth.signOut();
    this.router.navigate(['/login']);
  }

  usuarioEstaAutenticado() {
    return this.authState !== null;
  }


  criarUsuario(email: string, senha: string): void {

       const msgService = this.msgService;

       this.afAuth.auth.createUserWithEmailAndPassword(email, senha)
      .then( user => {
        msgService.showAlert('success', 'Conta criada com sucesso.');
        this.authState = user;
        this.mostrarMenuEmitter.emit(true);
        this.router.navigate(['/home']);
        this.fechaModalCadastroDeUsuario.emit(true);
      })
      .catch(function (onReject: any) {
        msgService.showErrorAlert(onReject.code);
      });

  }

  recuperarSenha(email: string) {

    const msgService = this.msgService;

    this.afAuth.auth.sendPasswordResetEmail(email)
    .then(success => {
        msgService.showAlert('success', 'Por favor verifique sua caixa de email.');
    })
    .catch(function (onReject: any, ) {
      msgService.showErrorAlert(onReject.code);
    });
  }

  alterarSenha(novaSenha: string) {
    const msgService = this.msgService;
    this.afAuth.auth.currentUser.updatePassword(novaSenha).then(success => {
      msgService.showAlert('success', 'Senha alterada com sucesso.');
    })
    .catch(function (onReject: any, ) {
      msgService.showErrorAlert(onReject.code);
    });

  }

  usuarioLogadoKey() {
    return this.afAuth.auth.currentUser.uid;
  }

}
