import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [],
  declarations: [],
  providers: [AngularFireDatabase]
})
export class CadastroPessoaModule { }
