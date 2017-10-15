import { FirebaseConfig } from './../environments/firebase.config';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2/index';

import { AlertModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

import { MapaModule } from './mapa/mapa.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { LoginModule } from './login/login.module';
import { AppRoutingModule } from './app.routing.module';

import { MapaGuard } from './guards/mapa.guard';
import { PessoasGuard } from './guards/pessoa.guard';

import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { MsgService } from './services/msg.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule,
    LoginModule,
    PessoasModule,
    MapaModule
  ],
  providers: [
    MsgService,
    AuthService,
    AuthGuard,
    PessoasGuard,
    MapaGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
