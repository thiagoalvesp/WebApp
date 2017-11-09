import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import * as GeoFire from 'geofire';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MapaService {

  dbRef: any;
  geoFire: any;

  hits = new BehaviorSubject([]);

  constructor(private db: AngularFireDatabase) {

    this.dbRef = this.db.list('/locations');
    this.geoFire = new GeoFire(this.dbRef.$ref);
  }

  updateArrayForMarkers(hits: Array<any>, hit: any): Array<any> {
       const key = hit.key;
       // se o marker não existir adiciono na coleção senão ele é somente atualizado com as novas coordernadas
       const marker = hits.find(function(el){  return el.key === key; });
       if ( marker === undefined ) {
           hits.push(hit);
       } else {
         hits.map(function(el){
           if (el.key === key) {
             el.location = hit.location;
             el.distance = hit.distance;
           }
           return el;
         });
       }

       return hits;

  }

  setLocations(key: string, coords: Array<number>) {
    this.geoFire.set(key, coords)
      .then(_ => console.log('location updated'))
      .catch(err => console.log(err));
  }

  getLocations(radius: number, coords: Array<number>) {

    this.geoFire.query({
      center: coords,
      radius: radius
    })
      // quando uma localização entrar no query
      // tslint:disable-next-line:no-unused-expression
    .on('key_entered', (key, location, distance) => {
        const hit = {
          key: key,
          location: location,
          distance: distance
        };

        const currentHits = this.updateArrayForMarkers(this.hits.value, hit);
        console.log(currentHits);
        this.hits.next(currentHits);
    });

    this.geoFire.query({
      center: coords,
      radius: radius
    })
      // quando uma localização entrar no query
      // tslint:disable-next-line:no-unused-expression
    .on('key_moved', (key, location, distance) => {
        const hit = {
          key: key,
          location: location,
          distance: distance
        };
        console.log(key + 'se moveu!');
        const currentHits = this.updateArrayForMarkers(this.hits.value, hit);
        console.log(currentHits);
        this.hits.next(currentHits);
    });



  }


}
