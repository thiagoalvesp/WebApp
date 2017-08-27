
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { AngularFireModule } from 'angularfire2/index';
import { FirebaseConfig } from "../environments/firebase.config";

@NgModule({
  declarations: [
    AppComponent,
    CadastroPessoaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(FirebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
