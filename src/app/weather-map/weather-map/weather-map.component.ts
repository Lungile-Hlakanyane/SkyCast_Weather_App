import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import * as L from 'leaflet'

@Component({
  selector: 'app-weather-map',
  templateUrl: './weather-map.component.html',
  styleUrls: ['./weather-map.component.scss'],
  imports: [IonicModule],
  standalone: true,
})
export class WeatherMapComponent  implements OnInit {

  map!: L.Map;
  weatherLayer!: L.TileLayer;
  private apiKey = 'd891a8d30c74a1239dbe3721003bbaa6';

  constructor(
    private navController:NavController
  ) { }

  ngOnInit() {
    this.initMap();
    this.setLayer('clouds_new');
  }

  initMap() {
    this.map = L.map('weather-map', {
      center: [-26.2041, 28.0473],
      zoom: 6
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }
  
  goBack(){
    this.navController.back();
  }

   setLayer(layer: string) {
    if (this.weatherLayer) {
      this.map.removeLayer(this.weatherLayer);
    }
    this.weatherLayer = L.tileLayer(
      `https://tile.openweathermap.org/map/${layer}/{z}/{x}/{y}.png?appid=${this.apiKey}`,
      { opacity: 0.5 }
    );
    this.weatherLayer.addTo(this.map);
  }

}
