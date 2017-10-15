import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PessoasComponent } from './pessoas.component';
import { PessoasFormComponent } from './pessoas-form/pessoas-form.component';
import { PessoasListaComponent } from './pessoas-lista/pessoas-lista.component';

import { AngularFireDatabase } from 'angularfire2/database';
import { PessoasRoutingModule } from './pessoas.routing.module';
import { PessoasDetalheComponent } from './pessoas-detalhe/pessoas-detalhe.component';

@NgModule({
  imports: [
    SharedModule,
    PessoasRoutingModule
  ],
  declarations: [
    PessoasComponent,
    PessoasFormComponent,
    PessoasDetalheComponent,
    PessoasListaComponent]
})
export class PessoasModule { }
