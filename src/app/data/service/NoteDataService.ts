import {NoteDataModel} from "../model/NoteDataModel";

export interface NoteDataService{
  add(note: NoteDataModel);
  getAll();
  get(id: string);
}
