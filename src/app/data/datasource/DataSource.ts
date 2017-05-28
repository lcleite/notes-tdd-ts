import {DataModel} from "../model/DataModel";

export interface DataSource<T extends DataModel>{
  
  getAll(): Promise<T[]>;
  get(id: string): Promise<T>;
  getList(ids: string[]): Promise<T[]>;
  add(model: T): Promise<Object>;
  update(model: T);
  upsert(model: T);
  remove(model: T);
  
}
