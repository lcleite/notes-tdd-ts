import {TestBed} from "@angular/core/testing";
import {ListNotesView} from "../../app/presentation/view/ListNotesView";
import {ListNotesViewImpl} from "../../app/presentation/view/impl/ListNotesViewImpl";
import {NoteViewModel} from "../../app/presentation/model/NoteViewModel";

describe('ListNotesService test', () => {

  let listNotesView: ListNotesView;

  beforeEach(() => {
    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      providers: [ListNotesViewImpl]
    });

    // UserService provided to the TestBed
    listNotesView = TestBed.get(ListNotesViewImpl);
  });

  function createNotes(): NoteViewModel[]{
    let note1: NoteViewModel = new NoteViewModel();
    note1.text = "Note1 Text";
    note1.lastEdited = new Date();
    
    let note2: NoteViewModel = new NoteViewModel();
    note2.text = "Note2 Text";
    note2.lastEdited = new Date();

    return [note1, note2];
  }

  it('should set and get notes', () => {
    let notes: NoteViewModel[] = createNotes();
    
    listNotesView.setNotes(notes);
    console.log(notes);
    expect(listNotesView.getNotes()).toEqual(notes);
  });
  
  it('should get a note', () => {
    let notes: NoteViewModel[] = createNotes();
    listNotesView.setNotes(notes);
    
    expect(listNotesView.getNote(1)).toEqual(notes[1]);
  });
});
