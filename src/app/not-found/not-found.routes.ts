import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found.component';

// Route Configuration
export const NotFoundRoutes: Routes = [
  { path: 'notfound', component: NotFoundComponent },
  { path: '**', redirectTo: 'notfound'}
];