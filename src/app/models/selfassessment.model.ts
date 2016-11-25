import { Interview } from './interview.model';
import { Rating } from './rating.model';
import { BaseModel } from './base.model';

export class SelfAssessment extends BaseModel {
    ratings: Rating[];
    interview: Interview;

    // constructor() {
    //     super();
    //     this.ratings = new Array<Rating>();
    // }
}
