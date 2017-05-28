import {Model} from "../Model";

export interface Mapper<T extends Model, U>{
  toEntity(other: U) : T;
  toOther(entity: T) : U;
}
