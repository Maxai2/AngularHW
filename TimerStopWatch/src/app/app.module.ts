import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StopWatchComponent } from './stop-watch/stop-watch.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    StopWatchComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'timer', component: TimerComponent },
      { path: 'stop-watch', component: StopWatchComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
