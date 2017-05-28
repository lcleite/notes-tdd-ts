import {NoteViewModel} from "../model/NoteViewModel";

export interface ListNotesView{
  getNote(index: number): NoteViewModel;
  getNotes(): NoteViewModel[];
  
  setNotes(notes: NoteViewModel[]);
  
  showNotesNotAvailableMessage(): string;
}
