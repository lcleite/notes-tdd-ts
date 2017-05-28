import {Mapper} from "../../../entity/mapper/Mapper";
import {Note} from "../../../entity/Note";
import {NoteViewModel} from "../NoteViewModel";

export class NoteViewMapper implements Mapper<Note, NoteViewModel>{
  
  toEntity(other: NoteViewModel): Note {
    let note: Note = new Note();
    
    note.id = other.id;
    note.text = other.text;
    note.lastEdited = other.lastEdited;
    
    return note;
  }
  
  toOther(entity: Note): NoteViewModel {
    let noteView: NoteViewModel = new NoteViewModel();
    
    noteView.id = entity.id;
    noteView.text = entity.text;
    noteView.lastEdited = entity.lastEdited;
    
    return noteView;
  }
  
}
