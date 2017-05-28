export abstract class ViewModel{
  private _id;

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }
}
