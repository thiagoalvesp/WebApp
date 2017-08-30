import { Component, OnInit } from '@angular/core';
import { pessoa } from './../../models/pessoa';

@Component({
  selector: 'app-cadastro-pessoa-form',
  templateUrl: './cadastro-pessoa-form.component.html',
  styleUrls: ['./cadastro-pessoa-form.component.css']
})
export class CadastroPessoaFormComponent implements OnInit {


  pessoa : pessoa = {
    nome :  null,
    cpf  :  null
  }; 
  
  constructor() { }
  

  ngOnInit() {
    
  }

  save(formulario){
      
        //nome: formulario.form.controls.nome.value,
        //cpf: formulario.form.controls.cpf.value
      
  }

}
