import { Injectable, EventEmitter  } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Alert } from '../models/alert';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {

  authState: any = null;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
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
}
