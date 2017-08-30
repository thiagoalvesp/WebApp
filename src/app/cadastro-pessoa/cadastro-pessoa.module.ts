import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CadastroPessoaComponent } from './cadastro-pessoa.component';
import { CadastroPessoaFormComponent } from './cadastro-pessoa-form/cadastro-pessoa-form.component';
import { CadastroPessoaListaComponent } from './cadastro-pessoa-lista/cadastro-pessoa-lista.component';

import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CadastroPessoaComponent, CadastroPessoaFormComponent, CadastroPessoaListaComponent],
  declarations: [CadastroPessoaComponent, CadastroPessoaFormComponent, CadastroPessoaListaComponent],
  providers:[AngularFireDatabase]
})
export class CadastroPessoaModule { }
