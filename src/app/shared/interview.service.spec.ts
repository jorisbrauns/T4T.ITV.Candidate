/* tslint:disable:no-unused-variable */
import { Question,Interview } from '../models';
import { TestBed, async, inject } from '@angular/core/testing';
import { InterviewService } from './interview.service';

describe('Service: Interview', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterviewService]
    });
  });

  it('should ...', inject([InterviewService], (service: InterviewService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllTodos()', () => {

    // it('should return an empty array by default', inject([InterviewService], (service: InterviewService) => {
    //   expect(service.getAllTodos()).toEqual([]);
    // }));

    it('should return a interview', inject([InterviewService], (service: InterviewService) => {
      let interview = new Interview({title: 'Hello 1', complete: false});
      expect(service.getInterview("4")).toEqual(interview);
    }));

  });

});
