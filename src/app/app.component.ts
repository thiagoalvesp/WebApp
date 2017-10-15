import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Alert } from './models/alert';
import { MsgService } from './services/msg.service';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { AlterarSenhaFormComponent } from './login/alterar-senha-form/alterar-senha-form.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  bsModalRef: BsModalRef;
  mostrarMenu = false;
  alerts: Alert[] = [];

  constructor(
    private authService: AuthService,
    private msgService: MsgService,
    private modalService: BsModalService) {}

  logOut() {
    this.authService.logout();
  }

  alterarSenha() {
      this.bsModalRef = this.modalService.show(AlterarSenhaFormComponent,
        {backdrop: false, ignoreBackdropClick: true});
  }
  ngOnInit() {
   this.authService.mostrarMenuEmitter.subscribe(
     mostrar => this.mostrarMenu = mostrar
   );
   this.msgService.alertEmitter.subscribe(
      alert => { this.alerts.push(alert); }
   );

  }
}
