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

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private msgService: MsgService
  ) {}


  login(email: string, senha: string): void {

    this.afAuth.auth.signInWithEmailAndPassword(email, senha)
      .then( user => {
        this.authState = user;
        this.mostrarMenuEmitter.emit(true);
        this.router.navigate(['/home']);
      })
      .catch(function (onReject: any, ) {
        console.log(onReject.message);
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


  criarUsuario(email: string, senha: string) {
        this.afAuth.auth.createUserWithEmailAndPassword(email, senha)
        .then( user => {
          this.msgService.showAlert('success', 'Conta criada com sucesso.');
          this.authState = user;
          this.mostrarMenuEmitter.emit(true);
          this.router.navigate(['/home']);
        })
        .catch(function (onReject: any, ) {
          console.log(onReject.message);
        });
  }

  recuperarSenha(email: string) {
    this.afAuth.auth.sendPasswordResetEmail(email)
    .then(success => {
        this.msgService.showAlert('success', 'Por favor verifique sua caixa de email.');
        return;
    })
    .catch(function (onReject: any, ) {
      console.log(onReject.message);
    });
  }

  alterarSenha(novaSenha: string) {
    this.afAuth.auth.currentUser.updatePassword(novaSenha).then(success => {
      this.msgService.showAlert('success', 'Senha alterada com sucesso.');
    })
    .catch(function (onReject: any, ) {
      console.log(onReject.message);
    });

  }



}
