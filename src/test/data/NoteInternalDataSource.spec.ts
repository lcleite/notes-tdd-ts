import {NoteDataModel} from "../../app/data/model/NoteDataModel";
import {TestBed} from "@angular/core/testing";
import {NoteInternalDataSource} from "../../app/data/datasource/NoteInternalDataSource";

describe('NoteInternalDataSource test', () => {

  let noteInternalDataSource: NoteInternalDataSource;

  // beforeAll(() => {
  //   noteInternalDataSource = new NoteInternalDataSource();
  // });

  beforeEach(() => {
    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      providers: [NoteInternalDataSource]
    });

    // UserService provided to the TestBed
    noteInternalDataSource = TestBed.get(NoteInternalDataSource);
  });

  function createNoteModel(): NoteDataModel{
    let noteData: NoteDataModel = new NoteDataModel();

    noteData.text = "Test";
    noteData.lastEdited = new Date();

    return noteData;
  }

  it('should create a data entity note', (done) => {
    let noteDataModel = createNoteModel();

    noteInternalDataSource.add(noteDataModel).then((doc: any) => {
      console.log("added: ");
      console.log(doc);
      expect(doc.id != null).toBeTruthy();
      done();
    });
  });
  
  it('should NOT create a data entity note', (done) => {//TODO: fiz isso pra aprender a criar fakes para mockar as chamadas da view que usam DOM e atrasar a criação de layout
    let noteDataModel = createNoteModel();
  
    spyOn(noteInternalDataSource, "add").and.callFake((noteDataModel: NoteDataModel) => {
      console.log("I'm replacing the real function with this "+noteDataModel.text);
    });
  
    //spyOn(myApp, "getFlag").and.returnValue(true);
  
    noteInternalDataSource.add(noteDataModel);
  
    expect(noteInternalDataSource.add).toHaveBeenCalledWith(noteDataModel);
    
    done();
  });

  // it('should get a data entity by its id promise', () => {
  //   let firstNote: NoteDataModel;
  //
  //   return Promise.resolve(noteInternalDataSource.getAll())
  //     .then((allNotes) => {
  //       firstNote = allNotes[0];
  //       return noteInternalDataSource.get(firstNote.id);
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

  it('should get a data entity by its id', async (done) => {
    let allNotes:NoteDataModel[] = await noteInternalDataSource.getAll();
    let firstNote:NoteDataModel = allNotes[0];
    let noteById: NoteDataModel = await noteInternalDataSource.get(firstNote.id);

    console.log("by id");
    console.log(firstNote);
    console.log(noteById);

    expect(firstNote).toEqual(noteById);
    done();
  });

  // it('should get all data entity notes async', async (done) => {
  //     let allNotes = await noteInternalDataSource.getAll();
  //     console.log(allNotes);
  //     expect(allNotes.length > 0).toBeTruthy();
  //     done();
  // });

  it('should get all data entity notes', (done) => {

    return Promise.resolve(noteInternalDataSource.getAll())
      .then((allNotes) => {
        console.log(allNotes);
        expect(allNotes.length > 0).toBeTruthy();
        done();
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
