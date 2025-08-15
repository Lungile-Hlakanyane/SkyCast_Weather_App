import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Weather } from 'src/app/services/weather-service/weather';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-saved-locations',
  templateUrl: './saved-locations.component.html',
  styleUrls: ['./saved-locations.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
  standalone: true
})
export class SavedLocationsComponent  implements OnInit {

  weatherData: any = null;
  isLoading = true;
  searchCity: string = ''; 

  constructor(
    private navController: NavController,
    private weatherService: Weather,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.fetchWeather('Bloemfontein'); 
  }

    fetchWeather(city: string) {
    if (!city) return;

    this.isLoading = true;
    this.weatherService.getCurrentWeather(city).subscribe({
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
        console.error(`Error fetching weather for ${city}:`, err);
        this.isLoading = false;
        this.weatherData = null;
        this.cdr.detectChanges();
      }
    });
  }

  searchWeather() {
    if (this.searchCity.trim() !== '') {
      this.fetchWeather(this.searchCity.trim());
    }
  }

  clearSearch() {
    this.searchCity = '';
    this.fetchWeather('Bloemfontein'); // default
  }

  goBack(){
    this.navController.back();
  }

}
