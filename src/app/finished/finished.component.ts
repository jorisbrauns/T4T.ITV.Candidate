import { Interview } from './../models/interview.model';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { InterviewService } from './../shared/interview.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finished',
  templateUrl: './finished.component.html',
  styleUrls: ['./finished.component.css']
})
export class FinishedComponent implements OnInit {

  interviewGuid: string;
  interview: Interview;
  
  constructor(
    private _interviewService: InterviewService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.interviewGuid = params['id'];

      this._interviewService
        .getInterview(this.interviewGuid)
        .then(response => {
          this.interview = response;
        });
    });

  }

}
