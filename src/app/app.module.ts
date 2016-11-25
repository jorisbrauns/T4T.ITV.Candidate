import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { InterviewService } from './shared/interview.service';
import { Routing } from './app.route';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastModule, ToastsManager } from 'ng2-toastr/ng2-toastr';

import { AppComponent } from './app.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { SelfAssessmentComponent } from './self-assessment/self-assessment.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TimerComponent } from './timer/timer.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { InterviewInfoComponent } from './interview-info/interview-info.component';
import { FinishedComponent } from './finished/finished.component';
import { CanActivateRoute } from './shared/canactivate-route.service';

@NgModule({
  declarations: [
    AppComponent,
    GetStartedComponent,
    SelfAssessmentComponent,
    ExerciseComponent,
    NotFoundComponent,
    TimerComponent,
    ProgressbarComponent,
    InterviewInfoComponent,
    FinishedComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    ReactiveFormsModule,
    ToastModule
  ],
  providers: [
    CanActivateRoute,
    InterviewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
