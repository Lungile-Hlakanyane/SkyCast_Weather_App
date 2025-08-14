import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { SideMenuComponent } from './re-useable-components/side-menu/side-menu.component';
import { TabsComponent } from './re-useable-components/tabs/tabs/tabs.component';
import { SettingsComponent } from './settings/settings/settings.component';
import { WeatherMapComponent } from './weather-map/weather-map/weather-map.component';
import { SavedLocationsComponent } from './saved-locations/saved-locations/saved-locations.component';
import { PolicyComponent } from './policy/policy/policy.component';
import { AboutComponent } from './about/about/about.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, 
    SideMenuComponent, TabsComponent, SettingsComponent, WeatherMapComponent, SavedLocationsComponent,PolicyComponent, AboutComponent],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
