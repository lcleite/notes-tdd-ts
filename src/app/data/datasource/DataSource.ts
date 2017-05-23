import * as PouchDB from 'pouchdb';
import * as PouchDBFind from 'pouchdb-find'
import {DataModel} from "../model/DataModel";
PouchDB.plugin(PouchDBFind);

export abstract class DataSource<T extends DataModel>{
  protected db: PouchDB.Database<T>;
  protected mapper: DataSource.PouchMapper<T>;

  constructor(){
    this.db = new PouchDB("notesdb", { adapter: 'websql' });
    //this.db = new PouchDB("http://localhost:5984/notesdb");
  }

  protected abstract idPrefix(): string;

  getAllDebug(){
    return this.db.allDocs({ include_docs: true }).then(dataArray => {
      return dataArray.rows;
    })
  }

  getAll(){
    return this.db.allDocs({
      include_docs: true,
      startkey: this.idPrefix(),
      endkey: this.idPrefix()+"\uffff"
    }).then(dataArray => {
      return dataArray.rows.map(row => {return this.mapper.documentToModel(row.doc)});
    })
  }

  get(id: string) {
    return this.db.get(id).then(doc => {
      return this.mapper.documentToModel(doc);
    });
  }

  getList(ids: Array<string>){
    return this.db.find({
      selector: {
        _id: {$in: ids}
      }
    }).then(dataArray => {
      return dataArray.docs.map(doc => {return this.mapper.documentToModel(doc)});
    })
  }

  getAllExcept(ids: Array<string>){
    return this.db.find({
      selector: {
        $not: {
          _id: {$in: ids}
        }
      }
    }).then(dataArray => {
      return dataArray.docs.map(doc => {return this.mapper.documentToModel(doc)});
    })
  }

  add(model: T){
    let modelDoc = this.mapper.modelToDocument(model);
    modelDoc._id = this.idPrefix() + Date.now();
    return this.db.put(modelDoc);
  }

  update(model: T){
    return this.db.get(model.id).then((doc: any) => {
      let modelDoc = this.mapper.modelToDocument(model);
      modelDoc._id = doc._id;
      modelDoc._rev = doc._rev;
      return this.db.put(modelDoc);
    });
  }

  upsert(model: T): any {
    if (model.id)
      return this.update(model);
    else
      return this.add(model);
  }

  remove(model: T){
    return this.db.get(model.id).then((doc: any) => {
      return this.db.remove(doc);
    });
  }
}

export namespace DataSource{
  export interface PouchMapper<T>{
    documentToModel(doc: any): T
    modelToDocument(model: T): any
  }
}
