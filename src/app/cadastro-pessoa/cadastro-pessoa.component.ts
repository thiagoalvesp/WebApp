import { Component, OnInit } from '@angular/core';
import { pessoa } from './../models/pessoa';

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})

export class CadastroPessoaComponent implements OnInit {
  pessoa : pessoa = {
    nome :  null,
    cpf  :  null
  }; 
  pessoas: pessoa[];
  
 
  constructor() { }
  

  ngOnInit() {
    this.pessoas = new Array<pessoa>();
  }

  save(formulario){
      console.log(formulario);

      this.pessoas.push({
        nome: formulario.form.controls.nome.value,
        cpf: formulario.form.controls.cpf.value
      });

  }

}
