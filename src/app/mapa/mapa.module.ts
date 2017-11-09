import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MapaRoutingModule } from './mapa.routing.module';
import { MapaComponent } from './mapa.component';

import { AgmCoreModule } from '@agm/core';
import { MapaService } from '../services/mapa.service';
import { GoogleMapsConfig } from '../../environments/googlemaps.config';

@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: GoogleMapsConfig.apiKey
    }),
    SharedModule,
    MapaRoutingModule
  ],
  declarations: [MapaComponent],
  providers: [MapaService]
})
export class MapaModule { }
