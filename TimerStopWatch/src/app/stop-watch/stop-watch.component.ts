import { Component, OnInit, Host } from '@angular/core';
import { AppComponent } from '../app.component';
import { TimeElem } from '../models/time-elem';

@Component({
  selector: 'app-stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.less']
})
export class StopWatchComponent implements OnInit {

  timer = new TimeElem(0, 0, 0);

  pause: HTMLElement;
  start: HTMLElement;
  reset: HTMLElement;
  interval: NodeJS.Timer;

  constructor(@Host() private appComp: AppComponent) {
    appComp.title = 'Stop Watch';
  }

  ngOnInit() {
    this.pause = document.getElementById('Pause');
    this.start = document.getElementById('Start');
    this.reset = document.getElementById('Reset');

    this.pause.setAttribute('style', 'display: none');
    this.reset.setAttribute('style', 'display: none');
  }

  StartTimer() {
    this.interval = setInterval(this.timerGo, 1000, this);
    this.start.setAttribute('style', 'display: none');
    this.pause.setAttribute('style', 'display: inline');
    this.reset.setAttribute('style', 'display: inline');
  }

  PauseTimer() {
    clearInterval(this.interval);
    this.start.setAttribute('style', 'display: inline');
    this.pause.setAttribute('style', 'display: none');
  }

  ResetTimer() {
    this.timer = new TimeElem(0, 0, 0);
  }

  timerGo(self) {
    self.timer.addSecond();

  }


}
