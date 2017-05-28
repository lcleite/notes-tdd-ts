import {ListNotesView} from "../ListNotesView";
import {NoteViewModel} from "../../model/NoteViewModel";

export class ListNotesViewImpl implements ListNotesView{
  
  private notes: NoteViewModel[];
  
  constructor(){
    this.notes = [];
  }
  
  getNote(index: number): NoteViewModel {
    return this.notes[index];
  }
  
  getNotes(): NoteViewModel[] {
    return this.notes;
  }
  
  
  setNotes(notes: NoteViewModel[]) {
    this.notes = notes;
  }
  
  showNotesNotAvailableMessage(): string {
    return "Error! Notes are not available!";
  }
  
}
