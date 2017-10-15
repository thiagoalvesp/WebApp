import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MapaRoutingModule } from './mapa.routing.module';
import { MapaComponent } from './mapa.component';


@NgModule({
  imports: [
    SharedModule,
    MapaRoutingModule
  ],
  declarations: [MapaComponent],
  providers: []
})
export class MapaModule { }
