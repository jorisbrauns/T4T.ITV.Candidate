import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit { // ,OnChanges {
  @Input() currentStep: number = 1;
  @Input() totalSteps: number = 10;

  constructor() { }

  ngOnInit() { }

  getWidth(): string {
    let width = this.currentStep / this.totalSteps * 100;
    return width + "%";
  }
}
