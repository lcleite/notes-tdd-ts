export abstract class DataModel{
  private _id;

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }
}
