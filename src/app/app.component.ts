import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Alert } from './models/alert';
import { MsgService } from './services/msg.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  mostrarMenu = false;
  alerts: Alert[] = [];

  constructor(private authService: AuthService, private msgService: MsgService) {

  }

  logOut() {
    this.authService.logout();
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
