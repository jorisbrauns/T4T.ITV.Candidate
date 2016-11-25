import { BaseModel } from './base.model';

export class Tag extends BaseModel {
  categoryId: number;
  name: string;
  code: string;
}