import {ListNotesView} from "../view/ListNotesView";

export interface ListNotesPresenter{
  
  setView(view: ListNotesView);
  
  getAllNotes();
  
}
