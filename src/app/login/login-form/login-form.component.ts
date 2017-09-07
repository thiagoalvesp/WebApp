import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private authSvc: AuthService , private router: Router) { }
  ngOnInit() {
  }

  form_login(f: NgForm) {
     if (!f.valid) {
        return;
     }
     const msgRet: string = this.authSvc.login(f.controls.email.value, f.controls.senha.value);
     if (msgRet === 'ok') {
      this.router.navigate(['/cadastro']);
     }else {
          // Mostrar a mensagem na tela
     }

     f.controls.email.setValue('');
     f.controls.senha.setValue('');
  }

}
