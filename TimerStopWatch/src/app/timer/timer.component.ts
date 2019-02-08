import { Component, OnInit, Host } from '@angular/core';
import { AppComponent } from '../app.component';
import { TimeElem } from '../models/time-elem';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.less']
})

export class TimerComponent implements OnInit {

  // timer5sec = new Date(0, 0, 0, 0, 0, 5, 0);
  // timer30sec = new Date(0, 0, 0, 0, 0, 30, 0);
  // timer1min = new Date(0, 0, 0, 0, 1, 0, 0);

  timer5sec = new TimeElem(0, 0, 5);
  timer30sec = new TimeElem(0, 0, 30);
  timer1min = new TimeElem(0, 1, 0);

  progress5Value = 5;
  progress30Value = 30;
  progress60Value = 60;
  pause: HTMLElement;
  start: HTMLElement;
  reset: HTMLElement;
  progress: HTMLElement;
  interval5sec: NodeJS.Timer;

  constructor(@Host() private appComp: AppComponent) {
    appComp.title = 'Timer';
  }

  ngOnInit() {
    this.pause = document.getElementById('Pause');
    this.start = document.getElementById('Start');
    this.reset = document.getElementById('Reset');
    this.progress = document.getElementById('progress');

    this.pause.setAttribute('style', 'display: none');
    this.reset.setAttribute('style', 'display: none');
  }

  StartTimer() {
    this.interval5sec = setInterval(this.timerGo, 1000, this);
    this.start.setAttribute('style', 'display: none');
    this.pause.setAttribute('style', 'display: inline');
    this.reset.setAttribute('style', 'display: inline');
  }

  PauseTimer() {
    clearInterval(this.interval5sec);
    this.start.setAttribute('style', 'display: inline');
    this.pause.setAttribute('style', 'display: none');
  }

  ResetTimer() {
    this.timer5sec = new TimeElem(0, 0, 5);
    this.progress5Value = 5;
  }

  timerGo(self) {
    if (self.timer5sec.subscribeSecond()) {
      self.progress5Value--;
      this.progress.animate(self.progress5Value);
    } else {
      clearInterval(this.interval5sec);
      this.start.setAttribute('style', 'display: inline');
      this.pause.setAttribute('style', 'display: none');
      this.reset.setAttribute('style', 'display: none');
    }

  }

}

// setInterval
// clearInterval

// start(sec: number) {
//   switch (sec) {
//     case 5:
//     for (let )
//       this.timer5sec.setSeconds(-1);
//       this.progress5Value--;
//       break;
//     case 30:
//       this.timer30sec.setSeconds(-1);
//       this.progress30Value--;
//       break;
//     case 60:
//       this.timer1min.setSeconds(-1);
//       this.progress60Value--;
//       break;
//   }
// }
