import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-weather-map',
  templateUrl: './weather-map.component.html',
  styleUrls: ['./weather-map.component.scss'],
  imports: [IonicModule],
  standalone: true,
})
export class WeatherMapComponent  implements OnInit {

  constructor(
    private navController:NavController
  ) { }

  ngOnInit() {}

  
  goBack(){
    this.navController.back();
  }

}
