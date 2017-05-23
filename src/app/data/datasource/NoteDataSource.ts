import {DataSource} from "./DataSource";
import {NoteDataModel} from "../model/NoteDataModel";

export class NoteDataSource extends DataSource<NoteDataModel>{

  constructor(){
    super();
    this.mapper = new NoteDocumentMapper();
  }

  protected idPrefix(): string {
    return "note:"
  }
}

class NoteDocumentMapper implements DataSource.PouchMapper<NoteDataModel>{
  documentToModel(doc: any): NoteDataModel {
    let model = new NoteDataModel();

    model.id = doc._id;
    model.text = doc.text;
    model.lastEdited = doc.lastEdited;

    return model;
  }

  modelToDocument(model: NoteDataModel): any {
    let doc: any = {};

    doc._id = model.id;
    doc.text = model.text;
    doc.lastEdited = model.lastEdited;

    return doc;
  }
}
