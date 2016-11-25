export class BaseModel {
  id: number;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
