import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WeatherCurrentTimeComponent } from './weather-current-time/weather-current-time.component';
import { CurrentWeatherAndBy5DayComponent } from './current-weather-and-by5-day/current-weather-and-by5-day.component';
import { CurrentWeatherBy7DayComponent } from './current-weather-by7-day/current-weather-by7-day.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    WeatherCurrentTimeComponent,
    CurrentWeatherAndBy5DayComponent,
    CurrentWeatherBy7DayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
