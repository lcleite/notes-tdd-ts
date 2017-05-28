import {GetAllNotesInteractor} from "../../app/interaction/GetAllNotesInteractor";
import {TestBed} from "@angular/core/testing";
import {GetAllNotesInteractorImpl} from "../../app/interaction/impl/GetAllNotesInteractorImpl";
import {Note} from "../../app/entity/Note";
import {NoteDataServiceImpl} from "../../app/data/service/impl/NoteDataServiceImpl";

describe('GetAllNotesInteractor test', () => {
  
  let getAllNotesInteractor: GetAllNotesInteractor;
  
  beforeEach(() => {
    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      providers: [GetAllNotesInteractorImpl]
    });
    
    // UserService provided to the TestBed
    getAllNotesInteractor = TestBed.get(GetAllNotesInteractorImpl);
  });
  
  function createNotes(): Note[]{
    let note1: Note = new Note();
    note1.text = "Note1 Text";
    note1.lastEdited = new Date();
    
    let note2: Note = new Note();
    note2.text = "Note2 Text";
    note2.lastEdited = new Date();
    
    return [note1, note2];
  }
  
  it('should interact and get all notes', async (done) => {
    let notes: Note[] = createNotes();

    spyOn(NoteDataServiceImpl.prototype, "getAll").and.callFake(() => {
      return notes;
    });
    
    let response: GetAllNotesInteractor.ResponseData;
    response = await getAllNotesInteractor.interact(new GetAllNotesInteractor.RequestData());

    console.log(response.allNotes);
    
    expect(response.allNotes).toEqual(notes);
    done();
  });
  
});
