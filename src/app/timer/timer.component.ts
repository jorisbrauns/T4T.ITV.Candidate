import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ChangeDetectionStrategy, SimpleChange } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TimerComponent implements OnInit, OnChanges {

  @Input() timeAllowed: number;
  @Output() timesUp = new EventEmitter();

  private _timeAllowed: number;
  private _timer: any;
  private _militimer: any;
  public timeTaken: number;
  private bar: number;

  constructor() { }

  ngOnInit() : void {
    this.setTimer(this.timeAllowed);
  }

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }): void {
    this.setTimer(this.timeAllowed);
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

  private setTimer(time: number): void {
    this.stopTimer();
    this.bar = 100;
    this._timeAllowed = time;
    let timeconfig = Observable.timer(1000, 10);
    this._timer = timeconfig.subscribe(t => {
      this.calculateTime();
      this.calculateBar();
      this.triggerEventTimer();
    });

  }

  private calculateTime(): void {
    this._timeAllowed -= 10;
    this.timeTaken = this.timeAllowed - this._timeAllowed;
  }

  private calculateBar(): void {
    this.bar = this._timeAllowed / this.timeAllowed * 100;
  }

  private addClassBlink(): string {
    return (this._timeAllowed <= 6000 && this._timeAllowed != 0) ? "exercisetime blink" : "exercisetime";
  }

  private triggerEventTimer(): void {
    if (this._timeAllowed == 0) {
      this.stopTimer();
      this.timesUp.next({ done: true });
    }
  }

  private stopTimer(): void {
    if (this._timer != null) {
      this._timer.unsubscribe();
    }
  }

  private getTimerColor(): string {
    return (this._timeAllowed <= 5000) ? "#a94442" : "#333";
  }

  private getBarColor(): string {
    if (this.bar <= 25) {
      return "#a94442";
    }
    if (this.bar <= 50) {
      return "#f0ad4e";
    }

    return "#3c763d";
  }

  private getBarWidth(): string {
    return this.bar + "%";
  }

  private pad(n, width, z = null): string {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

  private formatTime(ms: number): string {
    // 1- Convert to seconds:
    let seconds = ms / 1000;
    // 2- Extract hours:
    let hours = seconds / 3600; // 3,600 seconds in 1 hour
    seconds = seconds % 3600; // seconds remaining after extracting hours
    // 3- Extract minutes:
    let minutes = seconds / 60; // 60 seconds in 1 minute
    // 4- Keep only seconds not extracted to minutes:
    seconds = seconds % 60;

    return this.pad(Math.floor(hours), 2) + ":" + this.pad(Math.floor(minutes), 2) + ":" + this.pad(seconds, 2);
  }

}
