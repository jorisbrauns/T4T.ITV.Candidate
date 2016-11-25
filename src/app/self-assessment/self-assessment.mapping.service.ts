import { SelfAssessment, Interview, Rating } from './../models';
import { Injectable } from '@angular/core';

@Injectable()
export class SelfAssessmentMappingService {

    public MapInterviewToSelfAssessment(interview: Interview) : SelfAssessment {

        let selfassessment = new SelfAssessment({
            ratings: new Array<Rating>(),
            interviewId: interview.id,
            interview: interview
        });

        interview.skills.forEach(skill => {
            selfassessment.ratings.push(new Rating({
                rate: (typeof skill.rate === "undefined" ? 5 : +skill.rate),
                tag: skill.tag
            }));
        });

        return selfassessment;
    }

}