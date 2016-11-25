import { Candidate } from './candidate.model';
import { Skill } from './skill.model';
import { BaseModel } from './base.model';

export class Interview extends BaseModel {
  dateTaken: any;
  allowTimerZero:boolean;
  assessmentFinished: boolean;
  emailAddresses: string;
  candidate: Candidate;
  level: number;
  numberOfExercises: number;
  skills: Skill[];
  totalScore: number;
  includesAssessment: boolean;
};