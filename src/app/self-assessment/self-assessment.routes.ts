import { CanActivateRoute } from './../shared/canactivate-route.service';
import { Routes } from '@angular/router';
import { SelfAssessmentComponent } from './self-assessment.component';

// Route Configuration
export const SelfAssesmentRoutes: Routes = [
  {
    path: 'selfassessment/:id',
    component: SelfAssessmentComponent,
    canActivate: [CanActivateRoute]
  }
];