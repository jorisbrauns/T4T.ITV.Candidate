import { Tag } from './Tag.model';
import { BaseModel } from './base.model';

export class Skill extends BaseModel {
  level: number;
  rate: number;
  tag: Tag;
}
