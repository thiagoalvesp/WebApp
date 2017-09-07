import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
   }
  login(email: string, senha: string ): string {

    let msg = '';
    this.afAuth.auth.signInWithEmailAndPassword(email, senha)
    .then(ok => {
      return msg = 'ok';
    })
    .catch(function(onReject: any){
      msg = onReject.message;
    });

    return msg;

  }
  logout() {
    this.afAuth.auth.signOut();
  }



}
