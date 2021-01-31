import { Component } from '@angular/core';
import { latLng, marker, tileLayer, circle, Map } from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 12,
    center: latLng(45.7640, 4.8357)
  };

  onMapReady(map: Map): void {
    // ajouter un marker
    const marker1 = marker([45.7640, 4.8357]).addTo(map);

    // associer une popup au click sur le marker
    marker1.bindPopup('<b>Salut!</b><br>Je suis une popup').openPopup();

    // Ajouter un cercle
    circle([45.7640, 4.9], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500
    }).addTo(map);
  }
}
