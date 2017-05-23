import {NoteDataModel} from "../app/data/model/NoteDataModel";
import {NoteService} from "../app/data/service/NoteService";
import {NoteServiceImpl} from "../app/data/service/NoteServiceImpl";
import {TestBed} from "@angular/core/testing";

describe('NoteService test', () => {

  let noteService: NoteService;

  // beforeAll(() => {
  //   noteService = new NoteServiceImpl();
  // });

  beforeEach(() => {
    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      providers: [NoteServiceImpl]
    });

    // UserService provided to the TestBed
    noteService = TestBed.get(NoteServiceImpl);
  });

  function createNoteModel(): NoteDataModel{
    let noteData: NoteDataModel = new NoteDataModel();

    noteData.text = "Test";
    noteData.lastEdited = new Date();

    return noteData;
  }

  it('should create a data model note', (done) => {
    let noteDataModel = createNoteModel();

    noteService.add(noteDataModel).then((doc: any) => {
      console.log("added: ");
      console.log(doc);
      expect(doc.id != null).toBeTruthy();
      done();
    });
  });
  
  it('should NOT create a data model note', (done) => {//TODO: fiz isso pra aprender a criar fakes para mockar as chamadas da view que usam DOM e atrasar a criação de layout
    let noteDataModel = createNoteModel();
  
    spyOn(noteService, "add").and.callFake((noteDataModel: NoteDataModel) => {
      console.log("I'm replacing the real function with this "+noteDataModel.text);
    });
  
    //spyOn(myApp, "getFlag").and.returnValue(true);
  
    noteService.add(noteDataModel);
  
    expect(noteService.add).toHaveBeenCalledWith(noteDataModel);
    
    done();
  });

  // it('should get a data model by its id promise', () => {
  //   let firstNote: NoteDataModel;
  //
  //   return Promise.resolve(noteService.getAll())
  //     .then((allNotes) => {
  //       firstNote = allNotes[0];
  //       return noteService.get(firstNote.id);
  //     })
  //     .then((noteById) => {
  //       console.log("by id");
  //       console.log(firstNote);
  //       console.log(noteById);
  //       expect(firstNote).toEqual(noteById);
  //     })
  //     .catch((err) => {
  //       throw new Error("It wasn't supposed to fail");
  //     });
  // });

  it('should get a data model by its id', async (done) => {
    let allNotes:NoteDataModel[] = await noteService.getAll();
    let firstNote:NoteDataModel = allNotes[0];
    let noteById: NoteDataModel = await noteService.get(firstNote.id);

    console.log("by id");
    console.log(firstNote);
    console.log(noteById);

    expect(firstNote).toEqual(noteById);
    done();
  });

  // it('should get all data model notes async', async (done) => {
  //     let allNotes = await noteService.getAll();
  //     console.log(allNotes);
  //     expect(allNotes.length > 0).toBeTruthy();
  //     done();
  // });

  it('should get all data model notes', () => {

    return Promise.resolve(noteService.getAll())
      .then((allNotes) => {
        console.log(allNotes);
        expect(allNotes.length > 0).toBeTruthy();
      })
      .catch((err) => {
        throw new Error("It wasn't supposed to fail");
      });
  });

});

/*
 I like writing CRUD tests. One "test method" that actually performs a series of tests. Usually in this pattern:

 1 Create
 2 Read by primary key. Were all the fields properly set?
 3 Read by a collection. You'll get lots of records, is the newly created record in the collection?
 4 Update
 5 Read by primary key. Did the fields change correctly?
 6 Delete
 7 Read by primary key. Nothing was returned, right?
 8 Read by a collection. You'll get lots of records, is the newly created record no longer in the collection? Are the rest of the records still there?
 */
