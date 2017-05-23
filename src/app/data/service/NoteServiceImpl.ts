import {NoteService} from "./NoteService";
import {NoteDataModel} from "../model/NoteDataModel";
import {NoteDataSource} from "../datasource/NoteDataSource";

export class NoteServiceImpl implements NoteService{
  private noteDataSource: NoteDataSource;

  constructor(){
    this.noteDataSource = new NoteDataSource();
  }

  add(note: NoteDataModel) {
    return this.noteDataSource.add(note);
  }

  get(id: string) {
    return this.noteDataSource.get(id);
  }

  getAll(){
    return this.noteDataSource.getAll();
  }
}
