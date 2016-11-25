import { ToastsManager, Toast } from 'ng2-toastr/ng2-toastr';
import { Interview } from '../models';
import { InterviewService } from '../shared/interview.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Level } from "./../shared/level.enum";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent implements OnInit {

  interviewGuid: string;
  interview: Interview;

  constructor(
    private _toastr: ToastsManager,
    private _interviewService: InterviewService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.interviewGuid = params['id'];

      this._interviewService
        .getInterview(this.interviewGuid)
        .then(response => {
          if (response == null) {
            this.router.navigate(['/notfound']);
            return;
          }
          this.interview = response;
        });
    });
  }

  timesUp($event){
    console.log($event);
  }

  getStarted() {
    if (this.interview.includesAssessment && !this.interview.assessmentFinished) {
      this.router.navigate(['/selfassessment', this.interviewGuid]);
    } else {
      this.router.navigate(['/exercise', this.interviewGuid]);
    }
  }

  getLevel(level: number): string {
    return Level[level];
  }

}
