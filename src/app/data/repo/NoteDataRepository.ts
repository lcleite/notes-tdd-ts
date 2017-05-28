import {DataSource} from "../datasource/DataSource";
import {NoteDataModel} from "../model/NoteDataModel";
import {NoteInternalDataSource} from "../datasource/NoteInternalDataSource";
import {NoteDataMapper} from "../model/mapper/NoteDataMapper";

export class NoteDataRepository implements DataSource<NoteDataModel>{
  
  private noteDataInternalSource: NoteInternalDataSource;
  
  constructor(){
    this.noteDataInternalSource = new NoteInternalDataSource();
  }
  
  getAll(): Promise<NoteDataModel[]> {
    return this.noteDataInternalSource.getAll();
  }
  
  get(id: string): Promise<NoteDataModel> {
    return this.noteDataInternalSource.get(id);
  }
  
  getList(ids: string[]): Promise<NoteDataModel[]> {
    return this.noteDataInternalSource.getList(ids);
  }
  
  add(model: NoteDataModel): Promise<Object> {
    return this.noteDataInternalSource.add(model);
  }
  
  update(model: NoteDataModel) {
    return this.noteDataInternalSource.update(model);
  }
  
  upsert(model: NoteDataModel) {
    return this.noteDataInternalSource.upsert(model);
  }
  
  remove(model: NoteDataModel) {
    return this.noteDataInternalSource.remove(model);
  }
}
