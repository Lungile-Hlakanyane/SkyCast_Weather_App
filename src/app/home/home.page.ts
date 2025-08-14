import { Component, OnInit } from '@angular/core';
import { Weather } from '../services/weather-service/weather';
import { ModalController, LoadingController } from '@ionic/angular';
import { SideMenuComponent } from '../re-useable-components/side-menu/side-menu.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  weather: any;
  backgroundClass = 'default';
  currentDate = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  weatherIconUrl = '';
  rainPercentage = 0;

hourlyData = [
  { time: 'Now', icon: 'sunny-outline', temp: 20 },
  { time: '13:00', icon: 'partly-sunny-outline', temp: 22 },
  { time: '14:00', icon: 'cloud-outline', temp: 21 },
  { time: '15:00', icon: 'rainy-outline', temp: 20 },
  { time: '16:00', icon: 'cloud-outline', temp: 19 },
];

  dailyData = [
    { name: 'Mon', temp: 26, condition: 'Partly Cloudy' },
    { name: 'Tue', temp: 24, condition: 'Showers' },
    { name: 'Wed', temp: 22, condition: 'Cloudy' },
  ];

  constructor(
    private weatherService: Weather,
    private modalCtrl: ModalController,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.loadWeather('Bloemfontein');
  }

async loadWeather(city: string) {
  const loading = await this.loadingController.create({
    message: `Fetching weather for ${city}...`,
    spinner: 'crescent'
  });
  await loading.present();

  this.weatherService.getCurrentWeather(city).subscribe({
    next: (data) => {
      this.weather = data;
      this.weatherIconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      this.rainPercentage = data.rain ? data.rain['1h'] || 0 : 0;
      this.setBackground(data.weather[0].main);
      loading.dismiss();
    },
    error: () => {
      loading.dismiss();
    }
  });
}

setBackground(condition: string) {
  const weatherMap: any = {
    Clear: 'linear-gradient(135deg, #89f7fe, #66a6ff)',
    Clouds: 'linear-gradient(135deg, #d7d2cc, #304352)',
    Rain: 'linear-gradient(135deg, #4b79a1, #283e51)',
    Thunderstorm: 'linear-gradient(135deg, #232526, #414345)',
    Snow: 'linear-gradient(135deg, #83a4d4, #b6fbff)',
    Mist: 'linear-gradient(135deg, #757f9a, #d7dde8)'
  };
  this.backgroundClass = weatherMap[condition] || 'linear-gradient(135deg, #89f7fe, #66a6ff)';
}

async openMenu() {
    const modal = await this.modalCtrl.create({
      component: SideMenuComponent,
      cssClass: 'side-menu-modal',
      showBackdrop: true
    });
  await modal.present();
}

onSearch(event: any) {
  const searchTerm = event.detail.value?.trim();
  if (searchTerm) {
    this.loadWeather(searchTerm);
  }
}


}
