import {Mapper} from "../../../entity/mapper/Mapper";
import {NoteDataModel} from "../NoteDataModel";
import {Note} from "../../../entity/Note";

export class NoteDataMapper implements Mapper<Note, NoteDataModel>{
  
  toEntity(other: NoteDataModel): Note {
    let note: Note = new Note();
    
    note.id = other.id;
    note.text = other.text;
    note.lastEdited = other.lastEdited;
    
    return note;
  }
  
  toOther(entity: Note): NoteDataModel {
    let noteData: NoteDataModel = new NoteDataModel();
  
    noteData.id = entity.id;
    noteData.text = entity.text;
    noteData.lastEdited = entity.lastEdited;
  
    return noteData;
  }
  
}
