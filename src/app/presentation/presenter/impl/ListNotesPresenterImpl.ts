import {ListNotesPresenter} from "../ListNotesPresenter";
import {ListNotesView} from "../../view/ListNotesView";
import {GetAllNotesInteractorImpl} from "../../../interaction/impl/GetAllNotesInteractorImpl";
import {GetAllNotesInteractor} from "../../../interaction/GetAllNotesInteractor";
import {NoteViewMapper} from "../../model/mapper/NoteViewMapper";
import {NoteViewModel} from "../../model/NoteViewModel";

export class ListNotesPresenterImpl implements ListNotesPresenter{
  
  private view: ListNotesView;
  private getAllNotesInteractor: GetAllNotesInteractor;
  private noteViewMapper: NoteViewMapper;

  constructor(){
    this.getAllNotesInteractor = new GetAllNotesInteractorImpl();
    this.noteViewMapper = new NoteViewMapper();
  }
  
  setView(view: ListNotesView) {
    this.view = view;
  }
  
  getAllNotes() {
    this.getAllNotesInteractor.interact(new GetAllNotesInteractor.RequestData())
      .then((response: GetAllNotesInteractor.ResponseData) => {
        let allNoteViews: NoteViewModel[];
        
        allNoteViews = response.allNotes.map(note => {return this.noteViewMapper.toOther(note)});
        
        this.view.setNotes(allNoteViews);
      })
      .catch(() => {
        this.view.showNotesNotAvailableMessage();
      });
  }
  
}
