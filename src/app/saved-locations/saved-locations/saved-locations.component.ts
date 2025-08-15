import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Weather } from 'src/app/services/weather-service/weather';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-saved-locations',
  templateUrl: './saved-locations.component.html',
  styleUrls: ['./saved-locations.component.scss'],
  imports: [IonicModule, CommonModule],
  standalone: true
})
export class SavedLocationsComponent  implements OnInit {

  weatherData: any = null;
  isLoading = true;

  constructor(
    private navController: NavController,
    private weatherService: Weather,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.etchBloemfonteinWeather();
  }

   etchBloemfonteinWeather() {
    this.isLoading = true;
    this.weatherService.getCurrentWeather('Bloemfontein').subscribe({
      next: (data) => {
        this.weatherData = {
          city: data.name,
          temp: Math.round(data.main.temp),
          high: Math.round(data.main.temp_max),
          low: Math.round(data.main.temp_min),
          condition: data.weather[0].main,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error fetching weather for Bloemfontein:', err);
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  goBack(){
    this.navController.back();
  }

}
