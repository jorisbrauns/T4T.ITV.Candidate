import { Interview, SelfAssessment, Answer } from '../models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class InterviewService {

  private headers: Headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });
  
  private interview: Interview;
  private baseUrl: string;

  constructor(
    private _http: Http,
    private _toastr: ToastsManager) {
    this.baseUrl = 'http://localhost/T4T.ITV.Presentation.Candidate/api/interview';
    // this.baseUrl = 'http://t4t-uat-itvv2-client.azurewebsites.net/api/interview';
  }

  getInterview(guid: string, cache = true): Promise<Interview> {
    if (this.interview != null && cache == true) {
      return new Promise<Interview>((resolve, reject) => resolve(this.interview));
    }

    return this._http.get(`${this.baseUrl}/startinterview/${guid}`)
      .toPromise()
      .then(response => {
        this.interview = response.json();
        return response.json() as Interview;
      })
      .catch(error => this.handleError(error));
  }

  getExercise(guid: string): Promise<Response> {
    return this._http.get(`${this.baseUrl}/getexercise/${guid}`)
      .toPromise()
      .then(response => response.json())
      .catch(error => this.handleError(error));
  }

  saveSelfAssessment(assessment: SelfAssessment): Promise<Response> {
    return this._http
      .post(`${this.baseUrl}/assessment`, JSON.stringify(assessment), { headers: this.headers })
      .toPromise()
      .then(response => response)
      .catch(error => this.handleError(error));
  }

  saveExercise(answer: Answer): Promise<Response> {
    return this._http
      .post(`${this.baseUrl}/setanswer`, JSON.stringify(answer), { headers: this.headers })
      .toPromise()
      .then(response => {
        if (response != null) {
          return response.json()
        }
        return response;
      })
      .catch(error => this.handleError(error));
  }

  finishInterview(interviewId: number) : Promise<Interview> {
    return this._http
      .post(`${this.baseUrl}/done`, JSON.stringify({
        interviewId: interviewId
      }), { headers: this.headers })
      .toPromise()
      .then(response => {
        return response.json() as Interview;
      })
      .catch(error => this.handleError(error));
  }

  private handleError(error: any) {
    this._toastr.error('Please contact our T4T recruiter!', 'Something went oops!', { dismiss: 'click' });
    return Promise.reject(error.message || error);
  }
};