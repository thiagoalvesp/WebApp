import { MaterialModule } from './material.module';
import { FirebaseConfig } from './../environments/firebase.config';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2/index';

import { CadastroPessoaModule } from './cadastro-pessoa/cadastro-pessoa.module';
import { LoginModule } from './login/login.module';
import { AppRoutingModule } from './app.routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    CadastroPessoaModule,
    LoginModule,
    AngularFireModule.initializeApp(FirebaseConfig),
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
