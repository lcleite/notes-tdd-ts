import {Interactor} from "./Interactor";
import RequestData = GetAllNotesInteractor.RequestData;
import ResponseData = GetAllNotesInteractor.ResponseData;
import {Note} from "../entity/Note";

export interface GetAllNotesInteractor extends Interactor<RequestData, ResponseData>{}

export namespace GetAllNotesInteractor{
  
  export class RequestData implements Interactor.RequestData{}
  
  export class ResponseData implements Interactor.ResponseData{
    private _allNotes: Note[];
  
    get allNotes(): Note[] {
      return this._allNotes;
    }
  
    set allNotes(value: Note[]) {
      this._allNotes = value;
    }
  }
  
}
