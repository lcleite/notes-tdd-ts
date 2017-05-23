import {Note} from "../app/model/Note";
describe('Note test', () => {

  it('should create an empty note', () => {
    let note: Note = new Note();

    expect(note instanceof Note).toBeTruthy();
  });

  it('should get a note text', () => {
    let note: Note = new Note();

    note.text = "Hello!";

    expect(note.text).toEqual("Hello!");
  });

  it('should get a note last edition date', () => {
    let note: Note = new Note();
    let date: Date = new Date("07/30/1990");

    note.lastEdited = date;

    expect(note.lastEdited).toEqual(date);
  });

});
