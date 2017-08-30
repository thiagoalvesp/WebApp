import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { pessoa } from './../../models/pessoa';

@Component({
  selector: 'app-cadastro-pessoa-lista',
  templateUrl: './cadastro-pessoa-lista.component.html',
  styleUrls: ['./cadastro-pessoa-lista.component.css']
})
export class CadastroPessoaListaComponent implements OnInit {

  pessoas: FirebaseListObservable<pessoa[]>;

  constructor(db: AngularFireDatabase) {

    this.pessoas = db.list('pessoas');

   }
  

  ngOnInit() {

  }

}
