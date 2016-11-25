import { TimerComponent } from './../timer/timer.component';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { SelfAssessmentMappingService } from './../self-assessment/self-assessment.mapping.service';
import { InterviewService } from './../shared/interview.service';
import { Interview, Answer } from './../models';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  interviewGuid: string;
  interview: Interview;
  exercise: any;
  timeAllowed: number = 25; // Default will be overwritten when exercise is retreived
  timeTaken: number = 0;    // Same story mate!
  form: FormGroup;

  @ViewChild(TimerComponent)
  private timerComponent: TimerComponent;

  constructor(
    private _interviewService: InterviewService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.interviewGuid = params['id'];
      this._interviewService
        .getInterview(this.interviewGuid)
        .then(itv => {
          this.interview = itv;
          console.log(itv);
        });

      this._interviewService
        .getExercise(this.interviewGuid)
        .then(response => this.handleExerciseResponse(response));
    });
  }

  buildForm() {
    var fields = {};
    for (let answer of this.exercise.answers) {
      var field = [];
      field[answer.multipleChoiceAnswerId] = new FormControl()
      Object.assign(fields, field);
    }
    this.form = new FormGroup(fields);
  }

  nextExercise() {
    let selectedAnswers = new Array<number>();
    for (var field in this.form.value) {
      if (this.form.value.hasOwnProperty(field)) {
        if (this.form.value[field]) {
          selectedAnswers.push(+field);
        }
      }
    }

    var answer = new Answer({
      interviewId: this.interview.id,
      selectedAnswers: selectedAnswers,
      timeAllowed: this.exercise.timeAllowed,
      totalExercises: this.exercise.exercisesTotal,
      answeredExercises: this.exercise.exercisesAnswered,
      notAnswered: selectedAnswers.length == 0,
      exerciseId: this.exercise.id,
      timeTaken: this.timerComponent.timeTaken
    });

    this._interviewService
      .saveExercise(answer)
      .then(response => this.handleExerciseResponse(response));
  }

  handleExerciseResponse(response) {
    if (response == null) {
      this._interviewService.finishInterview(this.interview.id)
        .then(response => {
          this.router.navigate(['/finished', this.interviewGuid]);
        });
    } else {
      this.exercise = response;
      this.buildForm();
    }
  }

  timesUp(event) {
    if (!this.interview.allowTimerZero) {
      this.nextExercise();
    }
  }

}
