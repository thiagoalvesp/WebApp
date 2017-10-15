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

  // testar
  criarUsuario(email: string, senha: string, confirmacaoDeSenha: string) {
        this.afAuth.auth.createUserWithEmailAndPassword(email, senha)
        .then( user => {
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
        this.msgService.showAlert('info', 'Por Favor verifique sua caixa de email.');
        return;
    })
    .catch(function (onReject: any, ) {
      console.log(onReject.message);
    });
  }



}
