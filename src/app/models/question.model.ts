import { BaseModel } from './base.model';

export class Question extends BaseModel {
  completed: boolean = false;
  question: string = '';
  answers: string[] = [];
}




