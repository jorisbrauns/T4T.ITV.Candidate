import { CanActivateRoute } from './../shared/canactivate-route.service';
import { ExerciseComponent } from './exercise.component';
import { Routes } from '@angular/router';

// Route Configuration
export const ExerciseRoutes: Routes = [
  {
    path: 'exercise/:id',
    component: ExerciseComponent,
    canActivate: [CanActivateRoute]
  }
];