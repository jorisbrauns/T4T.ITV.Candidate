import * as r from './shared/routes.barrel';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/notfound',
    pathMatch: 'full'
  },
  ...r.GetStartedRoutes,
  ...r.SelfAssesmentRoutes,
  ...r.ExerciseRoutes,
  ...r.FinishedRoutes,
  ...r.NotFoundRoutes
];

export const Routing = RouterModule.forRoot(appRoutes);