import { Tag } from './tag.model';
import { BaseModel } from './base.model';

export class Rating extends BaseModel {
    tag: Tag;
    rate: number;
}
