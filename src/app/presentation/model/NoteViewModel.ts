import {ViewModel} from "./ViewModel";

export class NoteViewModel extends ViewModel{
  private _text: string;
  private _lastEdited: Date;

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

  get lastEdited(): Date {
    return this._lastEdited;
  }

  set lastEdited(value: Date) {
    this._lastEdited = value;
  }
}
