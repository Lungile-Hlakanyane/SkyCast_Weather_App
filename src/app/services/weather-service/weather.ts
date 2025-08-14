import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Weather {

  private apiKey = 'd891a8d30c74a1239dbe3721003bbaa6';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getCurrentWeather(city: string, units: string = 'metric'): Observable<any> {
    return this.http.get(`${this.apiUrl}?q=${city}&units=${units}&appid=${this.apiKey}`);
  }
  
}
