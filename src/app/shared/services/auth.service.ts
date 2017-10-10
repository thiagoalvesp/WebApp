import { Injectable, EventEmitter  } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Alert } from '../models/alert';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {

  user: Observable<firebase.User>;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
    this.user = afAuth.authState;
  }


  login(email: string, senha: string): void {

    this.afAuth.auth.signInWithEmailAndPassword(email, senha)
      .then( onResolve => {
        this.mostrarMenuEmitter.emit(true);
        this.user = onResolve;
        this.router.navigate(['/mapa']);
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

}
