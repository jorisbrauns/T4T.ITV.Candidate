import { Candidate } from './../models/candidate.model';
import { InterviewService } from './interview.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class CanActivateRoute implements CanActivate {

    constructor(
        private _interviewService: InterviewService,
        private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        let interviewGuid = route.params['id'];
        // Check if exercise has been finished by the Candidate.
        return this._interviewService.getInterview(interviewGuid)
            .then(response => {
                if (response != null && response.dateTaken != null){
                    this.router.navigate(['/finished', interviewGuid]);
                    return false;
                }
                return true;
            });

    }
}