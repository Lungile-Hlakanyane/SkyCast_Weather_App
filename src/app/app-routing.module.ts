import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './re-useable-components/tabs/tabs/tabs.component';
import { SettingsComponent } from './settings/settings/settings.component';
import { WeatherMapComponent } from './weather-map/weather-map/weather-map.component';
import { SavedLocationsComponent } from './saved-locations/saved-locations/saved-locations.component';
import { PolicyComponent } from './policy/policy/policy.component';
import { AboutComponent } from './about/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)},
      {path: 'settings', component: SettingsComponent},
      {path: 'weather-map', component: WeatherMapComponent},
      {path: 'saved-locations', component: SavedLocationsComponent},
      {path: 'policy', component: PolicyComponent},
      {path: 'about', component: AboutComponent},
    ]
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
