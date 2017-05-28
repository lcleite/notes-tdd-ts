import {TestBed} from "@angular/core/testing";
import {Note} from "../../app/entity/Note";
import {ListNotesPresenter} from "../../app/presentation/presenter/ListNotesPresenter";
import {ListNotesPresenterImpl} from "../../app/presentation/presenter/impl/ListNotesPresenterImpl";
import {ListNotesView} from "../../app/presentation/view/ListNotesView";
import {ListNotesViewImpl} from "../../app/presentation/view/impl/ListNotesViewImpl";
import {NoteViewModel} from "../../app/presentation/model/NoteViewModel";
import {GetAllNotesInteractorImpl} from "../../app/interaction/impl/GetAllNotesInteractorImpl";
import {reject} from "q";
import {GetAllNotesInteractor} from "../../app/interaction/GetAllNotesInteractor";

describe('ListNotesPresenter test', () => {
  
  let listNotesPresenter: ListNotesPresenter;
  let listNotesView: ListNotesView;
  
  beforeEach(() => {
    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      providers: [ListNotesPresenterImpl, ListNotesViewImpl]
    });
    
    // UserService provided to the TestBed
    listNotesPresenter = TestBed.get(ListNotesPresenterImpl);
    listNotesView = TestBed.get(ListNotesViewImpl);
    listNotesPresenter.setView(listNotesView);
  });
  
  function createNotes(): Note[]{
    let note1: Note = new Note();
    note1.text = "Note1 Text";
    note1.lastEdited = new Date("07/30/1990");
    
    let note2: Note = new Note();
    note2.text = "Note2 Text";
    note2.lastEdited = new Date("07/30/1990");
    
    return [note1, note2];
  }
  
  function createNoteViews(): NoteViewModel[]{
    let note1: NoteViewModel = new NoteViewModel();
    note1.id = undefined;
    note1.text = "Note1 Text";
    note1.lastEdited = new Date("07/30/1990");
    
    let note2: NoteViewModel = new NoteViewModel();
    note2.id = undefined;
    note2.text = "Note2 Text";
    note2.lastEdited = new Date("07/30/1990");
    
    return [note1, note2];
  }
  
  it('should get all notes', async (done) => {
    spyOn(GetAllNotesInteractorImpl.prototype, 'interact').and.callFake(() => {
      return new Promise<GetAllNotesInteractor.ResponseData>(((resolve, reject) => {
        let response: GetAllNotesInteractor.ResponseData = new GetAllNotesInteractor.ResponseData();
        response.allNotes = createNotes();
        resolve(response);
      }));
    });
    
    let noteViews: NoteViewModel[] = createNoteViews();
    await listNotesPresenter.getAllNotes();
    
    console.log(listNotesView.getNotes());
    
    expect(listNotesView.getNotes()).toEqual(noteViews);
    done();
  });
  
  it('should call showNotesNotAvailableMessage', (done) => {
    
    spyOn(listNotesView,"showNotesNotAvailableMessage");
    
    spyOn(GetAllNotesInteractorImpl.prototype, "interact").and.callFake(() => {
      return new Promise<GetAllNotesInteractor.ResponseData>(((resolve, reject) => {
        reject();
      }));
    });
    
    listNotesPresenter.getAllNotes();
    
    setTimeout(() => {
      expect(listNotesView.showNotesNotAvailableMessage).toHaveBeenCalled();
      done();
    },2000);
  });
  
});
