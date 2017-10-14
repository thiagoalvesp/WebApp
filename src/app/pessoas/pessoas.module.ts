import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PessoasComponent } from './pessoas.component';
import { PessoasFormComponent } from './pessoas-form/pessoas-form.component';
import { PessoasListaComponent } from './pessoas-lista/pessoas-lista.component';

import { AngularFireDatabase } from 'angularfire2/database';
import { PessoasRoutingModule } from './pessoas.routing.module';
import { PessoasDetalheComponent } from './pessoas-detalhe/pessoas-detalhe.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PessoasRoutingModule
  ],
  exports: [PessoasComponent,  PessoasFormComponent,  PessoasDetalheComponent,  PessoasListaComponent],
  declarations: [PessoasComponent, PessoasFormComponent, PessoasDetalheComponent, PessoasListaComponent],
  providers: [AngularFireDatabase]
})
export class PessoasModule { }
