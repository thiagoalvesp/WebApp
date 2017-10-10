import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


import { AngularFireDatabase } from 'angularfire2/database';

import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Pessoa } from '../../shared/models/pessoa';


@Component({
  selector: 'app-cadastro-pessoa-form',
  templateUrl: './cadastro-pessoa-form.component.html',
  styleUrls: ['./cadastro-pessoa-form.component.css']
})
export class CadastroPessoaFormComponent implements OnInit {


  pessoa: Pessoa = {
    nome :  null,
    cpf  :  null
  };

  constructor(
    private angularFire: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }


  ngOnInit() {

  }

 /* save(f : NgForm){

      this.angularFire.list('pessoas').push({
        nome : f.form.controls.nome.value,
        cpf : f.form.controls.cpf.value
      }).then( (t : any) => console.log('dados gravados: '+ t.key) ),
      (e : any) => console.log(e.message);

        f.controls.nome.setValue('');
        // nome: formulario.form.controls.nome.value,
        //cpf: formulario.form.controls.cpf.value

  }
*/

}
