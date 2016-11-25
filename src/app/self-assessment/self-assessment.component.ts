import { SelfAssessmentMappingService } from './self-assessment.mapping.service';
import { Interview, SelfAssessment, Rating } from '../models';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { InterviewService } from '../shared/interview.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-selfassessment',
  templateUrl: './self-assessment.component.html',
  styleUrls: ['./self-assessment.component.css'],
  providers: [
    SelfAssessmentMappingService
  ]
})
export class SelfAssessmentComponent implements OnInit {

  self = this;
  interviewId: string;
  interview: Interview;

  constructor(
    private _interviewService: InterviewService,
    private _mappingService: SelfAssessmentMappingService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.interviewId = params['id'];

      this._interviewService
        .getInterview(this.interviewId)
        .then(response => this.interview = response);
    });
  }

  onSubmit() {
    let assessment = this._mappingService.MapInterviewToSelfAssessment(this.interview);
    this._interviewService
      .saveSelfAssessment(assessment)
      .then(response => this.router.navigate(['/exercise', this.interviewId]));
  }

}
