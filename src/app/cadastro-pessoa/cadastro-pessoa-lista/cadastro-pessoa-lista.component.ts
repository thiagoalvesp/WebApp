import { Component, OnInit } from '@angular/core';
import { pessoa } from './../../models/pessoa';

@Component({
  selector: 'app-cadastro-pessoa-lista',
  templateUrl: './cadastro-pessoa-lista.component.html',
  styleUrls: ['./cadastro-pessoa-lista.component.css']
})
export class CadastroPessoaListaComponent implements OnInit {

  pessoa : pessoa = {
    nome :  null,
    cpf  :  null
  }; 
  pessoas: pessoa[];
  
 
  constructor() { }
  

  ngOnInit() {
    this.pessoas = new Array<pessoa>();
  }

}
