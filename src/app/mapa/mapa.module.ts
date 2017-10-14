import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AngularFireDatabase } from 'angularfire2/database';
import { MapaRoutingModule } from './mapa.routing.module';
import { MapaComponent } from './mapa.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MapaRoutingModule
  ],
  exports: [MapaComponent],
  declarations: [MapaComponent],
  providers: [AngularFireDatabase]
})
export class MapaModule { }
