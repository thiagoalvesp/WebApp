import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Pessoa } from '../../shared/models/pessoa';


@Component({
  selector: 'app-pessoas-lista',
  templateUrl: './pessoas-lista.component.html',
  styleUrls: ['./pessoas-lista.component.css']
})
export class PessoasListaComponent implements OnInit {

  pessoas: FirebaseListObservable<Pessoa[]>;

  constructor(db: AngularFireDatabase) {

    this.pessoas = db.list('pessoas');

   }

  ngOnInit() {

  }

}
