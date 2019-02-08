import { CurrentWeatherBy7DayComponent } from './current-weather-by7-day/current-weather-by7-day.component';
import { CurrentWeatherAndBy5DayComponent } from './current-weather-and-by5-day/current-weather-and-by5-day.component';
import { WeatherCurrentTimeComponent } from './weather-current-time/weather-current-time.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'curTime', component: WeatherCurrentTimeComponent },
  { path: 'curWear5Day', component: CurrentWeatherAndBy5DayComponent },
  { path: 'curWear7Day', component: CurrentWeatherBy7DayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
