import { Component, OnInit } from '@angular/core';
import { MapaService } from '../services/mapa.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  lat: number;
  lng: number;

  markers: any;

  constructor(private mapaService: MapaService, private authService: AuthService) { }

  ngOnInit() {
    this.setUserLocation();
    this.getUsersLocation();
    this.mapaService.hits.subscribe(hits => {
      this.markers = hits;
    });
  }

  private setUserLocation() {

    if (typeof navigator !== 'undefined' && typeof navigator.geolocation !== 'undefined') {
      navigator.geolocation.watchPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.mapaService.setLocations(this.authService.usuarioLogadoKey(), [this.lat, this.lng]);
      });
    }

  }

  private getUsersLocation() {
    if (typeof navigator !== 'undefined' && typeof navigator.geolocation !== 'undefined') {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.mapaService.getLocations(500, [this.lat, this.lng]);
      });
    }
  }


}
