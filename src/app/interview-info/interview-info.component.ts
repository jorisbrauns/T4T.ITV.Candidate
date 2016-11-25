import { Interview } from './../models/interview.model';
import { InterviewService } from './../shared/interview.service';
import { Component, OnInit, Input } from '@angular/core';
import { Level } from "./../shared/level.enum";

@Component({
  selector: 'app-interview-info',
  templateUrl: './interview-info.component.html',
  styleUrls: ['./interview-info.component.css']
})
export class InterviewInfoComponent implements OnInit {

  @Input() guidId;
  private interview : Interview;
  constructor(private _interviewService: InterviewService) { }

  ngOnInit() {
      this._interviewService
        .getInterview(this.guidId)
        .then(response => this.interview = response);
  }

  getLevel(level: number): string {
    return Level[level];
  }

}
