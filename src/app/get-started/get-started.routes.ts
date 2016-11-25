import { CanActivateRoute } from '../shared/canactivate-route.service';
import { Routes } from '@angular/router';
import { GetStartedComponent } from './get-started.component';

// Route Configuration
export const GetStartedRoutes: Routes = [
  {
    path: 'getstarted/:id',
    component: GetStartedComponent,
    canActivate: [CanActivateRoute]
  }
];