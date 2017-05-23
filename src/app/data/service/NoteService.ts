import {NoteDataModel} from "../model/NoteDataModel";

export interface NoteService{
  add(note: NoteDataModel);
  getAll();
  get(id: string);
}
