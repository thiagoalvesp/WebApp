import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MapaComponent } from './mapa.component';
import { MapaGuard } from '../guards/mapa.guard';



const mapaRoutes = [
    {path: '', component: MapaComponent,
     canActivateChild: [MapaGuard]}
];

@NgModule({
    imports: [RouterModule.forChild(mapaRoutes)],
    exports: [RouterModule]
})
export class MapaRoutingModule {}
